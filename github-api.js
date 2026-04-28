/**
 * GitHub API integration for Bosphorus Auto admin panel.
 * Token is prompted each time and never stored.
 *
 * SETUP: Once your site is on GitHub, update GITHUB_CONFIG below
 * with your actual GitHub username and repository name.
 */

const GITHUB_CONFIG = {
  owner:  'Bosphorusla',
  repo:   'bosphorus',
  branch: 'main'
};

function promptForGitHubToken() {
  const token = prompt(
    'Enter your GitHub Personal Access Token:\n\n' +
    'Create one at: https://github.com/settings/tokens\n' +
    'Required scope: repo\n\n' +
    'Token is used once and never saved.'
  );
  if (!token || !token.trim()) throw new Error('GitHub token is required.');
  return token.trim();
}

async function getFileSHA(filePath, token) {
  const url = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${filePath}?ref=${GITHUB_CONFIG.branch}`;
  const r = await fetch(url, {
    headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json' }
  });
  if (!r.ok) {
    if (r.status === 404) return null;
    if (r.status === 401) throw new Error('Invalid GitHub token.');
    throw new Error(`GitHub error: ${r.statusText}`);
  }
  const data = await r.json();
  return data.sha;
}

async function uploadFileToGitHub(filePath, content, message, token) {
  if (!token) throw new Error('GitHub token is required.');
  const sha = await getFileSHA(filePath, token).catch(() => null);

  const url = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${filePath}`;
  const utf8Bytes = new TextEncoder().encode(content);
  const binaryString = String.fromCharCode.apply(null, utf8Bytes);
  const base64Content = btoa(binaryString);

  const body = {
    message: message || `Update ${filePath}`,
    content: base64Content,
    branch:  GITHUB_CONFIG.branch
  };
  if (sha) body.sha = sha;

  const r = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept':        'application/vnd.github.v3+json',
      'Content-Type':  'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!r.ok) {
    const e = await r.json().catch(() => ({}));
    if (r.status === 401) { clearCachedToken(); throw new Error('Invalid GitHub token. Please try again.'); }
    throw new Error(`GitHub error: ${e.message || r.statusText}`);
  }
  return r.json();
}

function commitMessage(action) {
  return `${action} via admin (${new Date().toLocaleString()})`;
}

/* ── REMEMBERED TOKEN (localStorage, per device) ── */
function getCachedToken() {
  try {
    let t = localStorage.getItem('gh_token');
    if (!t) {
      t = promptForGitHubToken();
      localStorage.setItem('gh_token', t);
    }
    return t;
  } catch (e) {
    return promptForGitHubToken();
  }
}
function clearCachedToken() {
  try { localStorage.removeItem('gh_token'); } catch(e) {}
  try { sessionStorage.removeItem('gh_token'); } catch(e) {}
}
function hasCachedToken() {
  try { return !!localStorage.getItem('gh_token'); } catch(e) { return false; }
}

/* ── BINARY UPLOAD (for photos) ──
 * file: a File or Blob from <input type="file">
 * Returns the relative path to use as the photo URL on the published site. */
async function uploadPhotoToGitHub(carId, file, token) {
  if (!token) throw new Error('GitHub token is required.');
  if (GITHUB_CONFIG.owner === 'TODO_GITHUB_USERNAME')
    throw new Error('GitHub repo not set up yet. Edit github-api.js with your repo info first.');

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g,'');
  const safeBase = file.name.replace(/\.[^.]+$/,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,40) || 'photo';
  const stamp = Date.now().toString(36);
  const filePath = `assets/cars/${carId}/${stamp}-${safeBase}.${ext}`;

  /* Read as base64 */
  const base64 = await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const result = r.result; /* "data:...;base64,XXXX" */
      const i = result.indexOf(',');
      resolve(i >= 0 ? result.slice(i + 1) : result);
    };
    r.onerror = () => reject(new Error('Could not read file.'));
    r.readAsDataURL(file);
  });

  const url = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${filePath}`;
  const r = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept':        'application/vnd.github.v3+json',
      'Content-Type':  'application/json'
    },
    body: JSON.stringify({
      message: commitMessage(`Upload photo for car #${carId}`),
      content: base64,
      branch:  GITHUB_CONFIG.branch
    })
  });
  if (!r.ok) {
    const e = await r.json().catch(() => ({}));
    if (r.status === 401) { clearCachedToken(); throw new Error('Invalid GitHub token. Try again.'); }
    throw new Error(`Upload failed: ${e.message || r.statusText}`);
  }
  return filePath; /* relative path, used as <img src=""> on the live site */
}
