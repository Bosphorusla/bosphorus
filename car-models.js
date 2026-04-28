/**
 * Common makes/models with typical engine + MPG for auto-fill in admin.
 * Approximate values — owners can override per-vehicle.
 * Format: MAKE → MODEL → { type, engine, mpg }
 */
const CAR_MODELS = {
  "Acura": {
    "ILX":   { type: "sedan", engine: "2.4L 4-Cylinder",      mpg: "24/34" },
    "TLX":   { type: "sedan", engine: "2.0L Turbo 4-Cylinder",mpg: "22/31" },
    "RDX":   { type: "suv",   engine: "2.0L Turbo 4-Cylinder",mpg: "22/28" },
    "MDX":   { type: "suv",   engine: "3.5L V6",              mpg: "19/26" },
    "Integra":{type: "sedan", engine: "1.5L Turbo 4-Cylinder",mpg: "30/37" }
  },
  "Audi": {
    "A3": { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "29/38" },
    "A4": { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "25/34" },
    "A5": { type: "coupe", engine: "2.0L Turbo 4-Cylinder", mpg: "24/32" },
    "A6": { type: "sedan", engine: "3.0L Turbo V6",          mpg: "22/31" },
    "Q3": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/29" },
    "Q5": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "23/28" },
    "Q7": { type: "suv",   engine: "3.0L Turbo V6",          mpg: "19/25" },
    "Q8": { type: "suv",   engine: "3.0L Turbo V6",          mpg: "17/22" }
  },
  "BMW": {
    "2 Series": { type: "coupe", engine: "2.0L Turbo 4-Cylinder", mpg: "26/36" },
    "3 Series": { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "26/36" },
    "4 Series": { type: "coupe", engine: "2.0L Turbo 4-Cylinder", mpg: "25/34" },
    "5 Series": { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "25/33" },
    "7 Series": { type: "sedan", engine: "3.0L Turbo 6-Cylinder", mpg: "22/29" },
    "X1":       { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "24/33" },
    "X3":       { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "25/29" },
    "X5":       { type: "suv",   engine: "3.0L Turbo 6-Cylinder", mpg: "21/26" },
    "X7":       { type: "suv",   engine: "3.0L Turbo 6-Cylinder", mpg: "20/25" },
    "Z4":       { type: "coupe", engine: "2.0L Turbo 4-Cylinder", mpg: "25/32" }
  },
  "Cadillac": {
    "CT4":      { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "23/34" },
    "CT5":      { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "23/32" },
    "XT4":      { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "24/30" },
    "XT5":      { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/29" },
    "XT6":      { type: "suv",   engine: "3.6L V6",                mpg: "18/25" },
    "Escalade": { type: "suv",   engine: "6.2L V8",                mpg: "14/19" }
  },
  "Chevrolet": {
    "Malibu":    { type: "sedan", engine: "1.5L Turbo 4-Cylinder", mpg: "29/36" },
    "Camaro":    { type: "coupe", engine: "2.0L Turbo 4-Cylinder", mpg: "20/30" },
    "Corvette":  { type: "coupe", engine: "6.2L V8",                mpg: "16/24" },
    "Equinox":   { type: "suv",   engine: "1.5L Turbo 4-Cylinder", mpg: "26/31" },
    "Traverse":  { type: "suv",   engine: "3.6L V6",                mpg: "18/27" },
    "Tahoe":     { type: "suv",   engine: "5.3L V8",                mpg: "16/20" },
    "Suburban":  { type: "suv",   engine: "5.3L V8",                mpg: "15/20" },
    "Blazer":    { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/29" },
    "Trailblazer":{type: "suv",   engine: "1.3L Turbo 3-Cylinder", mpg: "29/33" },
    "Silverado": { type: "truck", engine: "5.3L V8",                mpg: "15/20" },
    "Colorado":  { type: "truck", engine: "2.7L Turbo 4-Cylinder", mpg: "19/22" }
  },
  "Chrysler": {
    "300":     { type: "sedan", engine: "3.6L V6",  mpg: "19/30" },
    "Pacifica":{ type: "suv",   engine: "3.6L V6",  mpg: "19/28" }
  },
  "Dodge": {
    "Charger":   { type: "sedan", engine: "3.6L V6",   mpg: "19/30" },
    "Challenger":{ type: "coupe", engine: "3.6L V6",   mpg: "19/30" },
    "Durango":   { type: "suv",   engine: "3.6L V6",   mpg: "19/26" }
  },
  "Ford": {
    "Fusion":       { type: "sedan", engine: "1.5L Turbo 4-Cylinder", mpg: "23/34" },
    "Mustang":      { type: "coupe", engine: "2.3L Turbo 4-Cylinder", mpg: "21/32" },
    "Mustang GT":   { type: "coupe", engine: "5.0L V8",                mpg: "15/24" },
    "Escape":       { type: "suv",   engine: "1.5L Turbo 3-Cylinder", mpg: "27/33" },
    "Edge":         { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "21/28" },
    "Explorer":     { type: "suv",   engine: "2.3L Turbo 4-Cylinder", mpg: "21/28" },
    "Expedition":   { type: "suv",   engine: "3.5L Turbo V6",          mpg: "17/23" },
    "Bronco":       { type: "suv",   engine: "2.3L Turbo 4-Cylinder", mpg: "20/22" },
    "Bronco Sport": { type: "suv",   engine: "1.5L Turbo 3-Cylinder", mpg: "25/28" },
    "F-150":        { type: "truck", engine: "5.0L V8",                mpg: "17/24" },
    "F-250":        { type: "truck", engine: "6.2L V8",                mpg: "13/18" },
    "Ranger":       { type: "truck", engine: "2.3L Turbo 4-Cylinder", mpg: "21/26" },
    "Maverick":     { type: "truck", engine: "2.5L Hybrid",            mpg: "42/33" }
  },
  "GMC": {
    "Sierra":  { type: "truck", engine: "5.3L V8", mpg: "15/20" },
    "Canyon":  { type: "truck", engine: "2.7L Turbo 4-Cylinder", mpg: "19/22" },
    "Terrain": { type: "suv",   engine: "1.5L Turbo 4-Cylinder", mpg: "25/30" },
    "Acadia":  { type: "suv",   engine: "3.6L V6",                mpg: "19/27" },
    "Yukon":   { type: "suv",   engine: "5.3L V8",                mpg: "16/20" }
  },
  "Honda": {
    "Accord":    { type: "sedan", engine: "1.5L Turbo 4-Cylinder", mpg: "30/38" },
    "Civic":     { type: "sedan", engine: "2.0L 4-Cylinder",        mpg: "31/40" },
    "Insight":   { type: "sedan", engine: "1.5L Hybrid",            mpg: "55/49" },
    "CR-V":      { type: "suv",   engine: "1.5L Turbo 4-Cylinder", mpg: "28/34" },
    "Pilot":     { type: "suv",   engine: "3.5L V6",                mpg: "20/27" },
    "Passport":  { type: "suv",   engine: "3.5L V6",                mpg: "19/24" },
    "HR-V":      { type: "suv",   engine: "1.8L 4-Cylinder",        mpg: "26/32" },
    "Odyssey":   { type: "suv",   engine: "3.5L V6",                mpg: "19/28" },
    "Ridgeline": { type: "truck", engine: "3.5L V6",                mpg: "18/24" }
  },
  "Hyundai": {
    "Elantra":   { type: "sedan", engine: "2.0L 4-Cylinder",         mpg: "33/42" },
    "Sonata":    { type: "sedan", engine: "2.5L 4-Cylinder",         mpg: "28/38" },
    "Accent":    { type: "sedan", engine: "1.6L 4-Cylinder",         mpg: "33/41" },
    "Tucson":    { type: "suv",   engine: "2.5L 4-Cylinder",         mpg: "26/33" },
    "Santa Fe":  { type: "suv",   engine: "2.5L 4-Cylinder",         mpg: "25/28" },
    "Palisade":  { type: "suv",   engine: "3.8L V6",                  mpg: "19/26" },
    "Kona":      { type: "suv",   engine: "2.0L 4-Cylinder",          mpg: "29/35" },
    "Venue":     { type: "suv",   engine: "1.6L 4-Cylinder",          mpg: "29/33" }
  },
  "Infiniti": {
    "Q50":  { type: "sedan", engine: "3.0L Turbo V6", mpg: "20/29" },
    "Q60":  { type: "coupe", engine: "3.0L Turbo V6", mpg: "20/27" },
    "QX50": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "23/29" },
    "QX60": { type: "suv",   engine: "3.5L V6", mpg: "20/27" },
    "QX80": { type: "suv",   engine: "5.6L V8", mpg: "14/20" }
  },
  "Jeep": {
    "Wrangler":      { type: "suv", engine: "3.6L V6",                mpg: "17/23" },
    "Grand Cherokee":{ type: "suv", engine: "3.6L V6",                mpg: "19/26" },
    "Cherokee":      { type: "suv", engine: "2.4L 4-Cylinder",        mpg: "23/31" },
    "Compass":       { type: "suv", engine: "2.4L 4-Cylinder",        mpg: "23/32" },
    "Renegade":      { type: "suv", engine: "1.3L Turbo 4-Cylinder", mpg: "24/32" },
    "Gladiator":     { type: "truck", engine: "3.6L V6",              mpg: "17/22" }
  },
  "Kia": {
    "Forte":     { type: "sedan", engine: "2.0L 4-Cylinder",         mpg: "31/41" },
    "K5":        { type: "sedan", engine: "1.6L Turbo 4-Cylinder",   mpg: "27/37" },
    "Stinger":   { type: "sedan", engine: "2.5L Turbo 4-Cylinder",   mpg: "22/32" },
    "Soul":      { type: "suv",   engine: "2.0L 4-Cylinder",          mpg: "28/33" },
    "Sportage":  { type: "suv",   engine: "2.5L 4-Cylinder",          mpg: "25/32" },
    "Sorento":   { type: "suv",   engine: "2.5L 4-Cylinder",          mpg: "24/29" },
    "Telluride": { type: "suv",   engine: "3.8L V6",                  mpg: "20/26" },
    "Seltos":    { type: "suv",   engine: "2.0L 4-Cylinder",          mpg: "27/31" }
  },
  "Lexus": {
    "IS":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "22/32" },
    "ES":  { type: "sedan", engine: "2.5L 4-Cylinder",        mpg: "25/34" },
    "LS":  { type: "sedan", engine: "3.5L Turbo V6",          mpg: "19/29" },
    "RX":  { type: "suv",   engine: "3.5L V6",                mpg: "20/27" },
    "NX":  { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/28" },
    "GX":  { type: "suv",   engine: "4.6L V8",                mpg: "15/19" },
    "LX":  { type: "suv",   engine: "5.7L V8",                mpg: "14/18" },
    "RC":  { type: "coupe", engine: "2.0L Turbo 4-Cylinder", mpg: "21/31" }
  },
  "Mazda": {
    "Mazda3":     { type: "sedan", engine: "2.5L 4-Cylinder", mpg: "28/36" },
    "Mazda6":     { type: "sedan", engine: "2.5L 4-Cylinder", mpg: "26/35" },
    "CX-3":       { type: "suv",   engine: "2.0L 4-Cylinder", mpg: "29/34" },
    "CX-5":       { type: "suv",   engine: "2.5L 4-Cylinder", mpg: "26/31" },
    "CX-9":       { type: "suv",   engine: "2.5L Turbo 4-Cylinder", mpg: "22/28" },
    "CX-30":      { type: "suv",   engine: "2.5L 4-Cylinder", mpg: "26/33" },
    "MX-5 Miata": { type: "coupe", engine: "2.0L 4-Cylinder", mpg: "26/35" }
  },
  "Mercedes-Benz": {
    "A-Class":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "24/35" },
    "C-Class":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "23/31" },
    "E-Class":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "23/32" },
    "S-Class":  { type: "sedan", engine: "3.0L Turbo 6-Cylinder", mpg: "21/30" },
    "CLA":      { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "25/35" },
    "GLA":      { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "24/34" },
    "GLC":      { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/29" },
    "GLE":      { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "20/26" },
    "GLS":      { type: "suv",   engine: "3.0L Turbo 6-Cylinder", mpg: "18/24" }
  },
  "Nissan": {
    "Altima":     { type: "sedan", engine: "2.5L 4-Cylinder",          mpg: "28/39" },
    "Sentra":     { type: "sedan", engine: "2.0L 4-Cylinder",          mpg: "29/39" },
    "Maxima":     { type: "sedan", engine: "3.5L V6",                  mpg: "20/30" },
    "Versa":      { type: "sedan", engine: "1.6L 4-Cylinder",          mpg: "32/40" },
    "Rogue":      { type: "suv",   engine: "1.5L Turbo 3-Cylinder",   mpg: "30/37" },
    "Murano":     { type: "suv",   engine: "3.5L V6",                  mpg: "20/28" },
    "Pathfinder": { type: "suv",   engine: "3.5L V6",                  mpg: "21/27" },
    "Armada":     { type: "suv",   engine: "5.6L V8",                  mpg: "14/19" },
    "Frontier":   { type: "truck", engine: "3.8L V6",                  mpg: "18/24" },
    "Titan":      { type: "truck", engine: "5.6L V8",                  mpg: "16/21" }
  },
  "Ram": {
    "1500": { type: "truck", engine: "5.7L V8", mpg: "15/21" },
    "2500": { type: "truck", engine: "6.4L V8", mpg: "12/18" },
    "3500": { type: "truck", engine: "6.4L V8", mpg: "11/17" }
  },
  "Subaru": {
    "Impreza":   { type: "sedan", engine: "2.0L 4-Cylinder",         mpg: "28/36" },
    "Legacy":    { type: "sedan", engine: "2.5L 4-Cylinder",         mpg: "27/35" },
    "WRX":       { type: "sedan", engine: "2.4L Turbo 4-Cylinder",   mpg: "19/26" },
    "Outback":   { type: "suv",   engine: "2.5L 4-Cylinder",         mpg: "26/33" },
    "Forester":  { type: "suv",   engine: "2.5L 4-Cylinder",         mpg: "26/33" },
    "Ascent":    { type: "suv",   engine: "2.4L Turbo 4-Cylinder",   mpg: "20/26" },
    "Crosstrek": { type: "suv",   engine: "2.0L 4-Cylinder",         mpg: "28/33" },
    "BRZ":       { type: "coupe", engine: "2.4L 4-Cylinder",         mpg: "20/27" }
  },
  "Tesla": {
    "Model 3": { type: "sedan", engine: "Electric Motor", mpg: "132/126 MPGe" },
    "Model Y": { type: "suv",   engine: "Electric Motor", mpg: "127/117 MPGe" },
    "Model S": { type: "sedan", engine: "Electric Motor", mpg: "120/115 MPGe" },
    "Model X": { type: "suv",   engine: "Electric Motor", mpg: "109/97 MPGe"  }
  },
  "Toyota": {
    "Camry":      { type: "sedan", engine: "2.5L 4-Cylinder",        mpg: "28/39" },
    "Corolla":    { type: "sedan", engine: "1.8L 4-Cylinder",        mpg: "30/38" },
    "Avalon":     { type: "sedan", engine: "3.5L V6",                mpg: "22/32" },
    "Prius":      { type: "sedan", engine: "1.8L Hybrid",            mpg: "54/50" },
    "RAV4":       { type: "suv",   engine: "2.5L 4-Cylinder",        mpg: "27/35" },
    "Highlander": { type: "suv",   engine: "3.5L V6",                mpg: "21/29" },
    "4Runner":    { type: "suv",   engine: "4.0L V6",                mpg: "16/19" },
    "Sequoia":    { type: "suv",   engine: "5.7L V8",                mpg: "13/17" },
    "Sienna":     { type: "suv",   engine: "2.5L Hybrid",            mpg: "36/36" },
    "Tacoma":     { type: "truck", engine: "3.5L V6",                mpg: "18/22" },
    "Tundra":     { type: "truck", engine: "3.5L Turbo V6",          mpg: "18/24" },
    "Supra":      { type: "coupe", engine: "3.0L Turbo 6-Cylinder", mpg: "22/30" },
    "86":         { type: "coupe", engine: "2.0L 4-Cylinder",        mpg: "21/28" },
    "GR Corolla": { type: "sedan", engine: "1.6L Turbo 3-Cylinder", mpg: "21/28" }
  },
  "Volkswagen": {
    "Jetta":  { type: "sedan", engine: "1.5L Turbo 4-Cylinder", mpg: "31/41" },
    "Passat": { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "24/36" },
    "Golf":   { type: "sedan", engine: "1.4L Turbo 4-Cylinder", mpg: "29/37" },
    "GTI":    { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "24/34" },
    "Tiguan": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "23/30" },
    "Atlas":  { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "20/26" },
    "Taos":   { type: "suv",   engine: "1.5L Turbo 4-Cylinder", mpg: "28/36" }
  },
  "Volvo": {
    "S60":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "25/35" },
    "S90":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "24/35" },
    "XC40": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "23/32" },
    "XC60": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/29" },
    "XC90": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "20/27" }
  },

  /* ── Additional current US makes ── */
  "Alfa Romeo": {
    "Giulia":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "24/33" },
    "Stelvio": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/29" }
  },
  "Aston Martin": {
    "Vantage": { type: "coupe", engine: "4.0L Twin-Turbo V8", mpg: "18/24" },
    "DB11":    { type: "coupe", engine: "4.0L Twin-Turbo V8", mpg: "18/24" }
  },
  "Bentley": {
    "Continental GT": { type: "coupe", engine: "4.0L Twin-Turbo V8", mpg: "15/22" },
    "Bentayga":       { type: "suv",   engine: "4.0L Twin-Turbo V8", mpg: "15/19" }
  },
  "Buick": {
    "Encore":     { type: "suv",   engine: "1.3L Turbo 3-Cylinder", mpg: "26/30" },
    "Encore GX":  { type: "suv",   engine: "1.3L Turbo 3-Cylinder", mpg: "26/29" },
    "Envision":   { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "24/31" },
    "Enclave":    { type: "suv",   engine: "3.6L V6",               mpg: "18/26" },
    "LaCrosse":   { type: "sedan", engine: "3.6L V6",               mpg: "21/31" },
    "Regal":      { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "22/32" }
  },
  "Ferrari": {
    "Roma":      { type: "coupe", engine: "3.9L Twin-Turbo V8", mpg: "16/22" },
    "Portofino": { type: "coupe", engine: "3.9L Twin-Turbo V8", mpg: "17/24" },
    "812":       { type: "coupe", engine: "6.5L V12",           mpg: "12/16" }
  },
  "Fiat": {
    "500":  { type: "coupe", engine: "1.4L Turbo 4-Cylinder", mpg: "28/33" },
    "500X": { type: "suv",   engine: "1.3L Turbo 4-Cylinder", mpg: "24/30" },
    "500L": { type: "suv",   engine: "1.4L Turbo 4-Cylinder", mpg: "22/30" }
  },
  "Genesis": {
    "G70":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "22/30" },
    "G80":  { type: "sedan", engine: "2.5L Turbo 4-Cylinder", mpg: "22/32" },
    "G90":  { type: "sedan", engine: "3.5L Twin-Turbo V6",    mpg: "18/26" },
    "GV70": { type: "suv",   engine: "2.5L Turbo 4-Cylinder", mpg: "22/28" },
    "GV80": { type: "suv",   engine: "2.5L Turbo 4-Cylinder", mpg: "21/25" }
  },
  "Hummer": {
    "H1": { type: "suv", engine: "6.5L Turbo Diesel V8", mpg: "10/13" },
    "H2": { type: "suv", engine: "6.0L V8",              mpg: "10/14" },
    "H3": { type: "suv", engine: "3.7L 5-Cylinder",      mpg: "14/18" }
  },
  "Isuzu": {
    "Rodeo":   { type: "suv",   engine: "3.5L V6",        mpg: "15/19" },
    "Trooper": { type: "suv",   engine: "3.5L V6",        mpg: "13/16" },
    "Ascender":{ type: "suv",   engine: "4.2L I6",        mpg: "14/19" }
  },
  "Jaguar": {
    "XF":     { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "23/30" },
    "XE":     { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "25/34" },
    "F-PACE": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "21/27" },
    "E-PACE": { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "21/27" },
    "I-PACE": { type: "suv",   engine: "Dual-Motor Electric",   mpg: "80/72" },
    "F-TYPE": { type: "coupe", engine: "5.0L Supercharged V8",  mpg: "16/24" }
  },
  "Lamborghini": {
    "Huracan": { type: "coupe", engine: "5.2L V10",         mpg: "13/18" },
    "Urus":    { type: "suv",   engine: "4.0L Twin-Turbo V8", mpg: "12/17" },
    "Revuelto":{ type: "coupe", engine: "6.5L V12 Hybrid",   mpg: "16 MPGe" }
  },
  "Land Rover": {
    "Range Rover":         { type: "suv", engine: "3.0L Mild-Hybrid I6",   mpg: "18/26" },
    "Range Rover Sport":   { type: "suv", engine: "3.0L Mild-Hybrid I6",   mpg: "19/26" },
    "Range Rover Velar":   { type: "suv", engine: "2.0L Turbo 4-Cylinder", mpg: "21/27" },
    "Range Rover Evoque":  { type: "suv", engine: "2.0L Turbo 4-Cylinder", mpg: "21/27" },
    "Discovery":           { type: "suv", engine: "3.0L Mild-Hybrid I6",   mpg: "18/24" },
    "Discovery Sport":     { type: "suv", engine: "2.0L Turbo 4-Cylinder", mpg: "20/26" },
    "Defender":            { type: "suv", engine: "3.0L Mild-Hybrid I6",   mpg: "17/22" },
    "LR4":                 { type: "suv", engine: "5.0L V8",               mpg: "12/17" }
  },
  "Lincoln": {
    "Corsair":   { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/29" },
    "Nautilus":  { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "21/28" },
    "Aviator":   { type: "suv",   engine: "3.0L Twin-Turbo V6",    mpg: "18/26" },
    "Navigator": { type: "suv",   engine: "3.5L Twin-Turbo V6",    mpg: "16/22" },
    "MKZ":       { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "21/31" },
    "MKX":       { type: "suv",   engine: "3.7L V6",               mpg: "17/24" },
    "MKC":       { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "20/27" },
    "Continental":{ type: "sedan", engine: "3.7L V6",              mpg: "17/24" },
    "Town Car":  { type: "sedan", engine: "4.6L V8",               mpg: "16/24" }
  },
  "Lotus": {
    "Emira":  { type: "coupe", engine: "3.5L Supercharged V6", mpg: "17/26" },
    "Evora":  { type: "coupe", engine: "3.5L Supercharged V6", mpg: "16/24" },
    "Elise":  { type: "coupe", engine: "1.8L 4-Cylinder",      mpg: "21/27" }
  },
  "Lucid": {
    "Air":    { type: "sedan", engine: "Dual-Motor Electric", mpg: "131/126" },
    "Gravity":{ type: "suv",   engine: "Dual-Motor Electric", mpg: "118/112" }
  },
  "Maserati": {
    "Ghibli":       { type: "sedan", engine: "3.0L Twin-Turbo V6",    mpg: "18/25" },
    "Quattroporte": { type: "sedan", engine: "3.0L Twin-Turbo V6",    mpg: "16/24" },
    "Levante":      { type: "suv",   engine: "3.0L Twin-Turbo V6",    mpg: "16/23" },
    "Grecale":      { type: "suv",   engine: "2.0L Turbo 4-Cylinder", mpg: "22/28" },
    "MC20":         { type: "coupe", engine: "3.0L Twin-Turbo V6",    mpg: "15/24" },
    "GranTurismo":  { type: "coupe", engine: "3.0L Twin-Turbo V6",    mpg: "16/22" }
  },
  "McLaren": {
    "GT":     { type: "coupe", engine: "4.0L Twin-Turbo V8", mpg: "15/22" },
    "720S":   { type: "coupe", engine: "4.0L Twin-Turbo V8", mpg: "15/22" },
    "750S":   { type: "coupe", engine: "4.0L Twin-Turbo V8", mpg: "15/21" },
    "Artura": { type: "coupe", engine: "3.0L Twin-Turbo V6 Hybrid", mpg: "39 MPGe" }
  },
  "Mercury": {
    "Grand Marquis": { type: "sedan", engine: "4.6L V8",        mpg: "16/24" },
    "Mariner":       { type: "suv",   engine: "2.5L 4-Cylinder",mpg: "21/28" },
    "Milan":         { type: "sedan", engine: "2.5L 4-Cylinder",mpg: "22/31" },
    "Mountaineer":   { type: "suv",   engine: "4.0L V6",        mpg: "14/20" },
    "Sable":         { type: "sedan", engine: "3.5L V6",        mpg: "17/24" }
  },
  "Mini": {
    "Cooper":        { type: "coupe", engine: "1.5L Turbo 3-Cylinder", mpg: "28/37" },
    "Cooper S":      { type: "coupe", engine: "2.0L Turbo 4-Cylinder", mpg: "26/35" },
    "Cooper SE":     { type: "coupe", engine: "Single-Motor Electric", mpg: "115/100" },
    "Countryman":    { type: "suv",   engine: "1.5L Turbo 3-Cylinder", mpg: "26/33" },
    "Clubman":       { type: "coupe", engine: "1.5L Turbo 3-Cylinder", mpg: "26/35" }
  },
  "Mitsubishi": {
    "Mirage":         { type: "sedan", engine: "1.2L 3-Cylinder",        mpg: "36/43" },
    "Mirage G4":      { type: "sedan", engine: "1.2L 3-Cylinder",        mpg: "35/41" },
    "Outlander":      { type: "suv",   engine: "2.5L 4-Cylinder",        mpg: "24/30" },
    "Outlander Sport":{ type: "suv",   engine: "2.0L 4-Cylinder",        mpg: "24/30" },
    "Eclipse Cross":  { type: "suv",   engine: "1.5L Turbo 4-Cylinder",  mpg: "26/29" },
    "Lancer":         { type: "sedan", engine: "2.0L 4-Cylinder",        mpg: "26/34" },
    "Lancer Evolution":{ type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "17/23" }
  },
  "Oldsmobile": {
    "Alero":     { type: "sedan", engine: "2.4L 4-Cylinder", mpg: "22/30" },
    "Aurora":    { type: "sedan", engine: "4.0L V8",         mpg: "17/26" },
    "Bravada":   { type: "suv",   engine: "4.2L I6",         mpg: "15/20" },
    "Cutlass":   { type: "sedan", engine: "3.1L V6",         mpg: "20/29" },
    "Intrigue":  { type: "sedan", engine: "3.5L V6",         mpg: "20/29" },
    "Silhouette":{ type: "suv",   engine: "3.4L V6",         mpg: "18/24" }
  },
  "Plymouth": {
    "Prowler":   { type: "coupe", engine: "3.5L V6",         mpg: "17/23" },
    "Neon":      { type: "sedan", engine: "2.0L 4-Cylinder", mpg: "27/33" },
    "Voyager":   { type: "suv",   engine: "3.3L V6",         mpg: "17/23" },
    "Breeze":    { type: "sedan", engine: "2.0L 4-Cylinder", mpg: "22/30" }
  },
  "Polestar": {
    "Polestar 1": { type: "coupe", engine: "2.0L Hybrid",            mpg: "58 MPGe" },
    "Polestar 2": { type: "sedan", engine: "Dual-Motor Electric",    mpg: "107/97" },
    "Polestar 3": { type: "suv",   engine: "Dual-Motor Electric",    mpg: "92/85" }
  },
  "Pontiac": {
    "G6":       { type: "sedan", engine: "2.4L 4-Cylinder", mpg: "22/33" },
    "G8":       { type: "sedan", engine: "3.6L V6",         mpg: "17/25" },
    "Grand Prix":{ type: "sedan", engine: "3.8L V6",        mpg: "18/28" },
    "Solstice": { type: "coupe", engine: "2.4L 4-Cylinder", mpg: "20/28" },
    "Vibe":     { type: "suv",   engine: "1.8L 4-Cylinder", mpg: "26/31" },
    "GTO":      { type: "coupe", engine: "6.0L V8",         mpg: "16/21" },
    "Firebird": { type: "coupe", engine: "5.7L V8",         mpg: "17/26" },
    "Trans Am": { type: "coupe", engine: "5.7L V8",         mpg: "17/24" }
  },
  "Porsche": {
    "911":         { type: "coupe", engine: "3.0L Twin-Turbo Flat-6", mpg: "18/25" },
    "718 Cayman":  { type: "coupe", engine: "2.0L Turbo Flat-4",      mpg: "20/26" },
    "718 Boxster": { type: "coupe", engine: "2.0L Turbo Flat-4",      mpg: "20/26" },
    "Panamera":    { type: "sedan", engine: "2.9L Twin-Turbo V6",     mpg: "18/27" },
    "Macan":       { type: "suv",   engine: "2.0L Turbo 4-Cylinder",  mpg: "19/24" },
    "Cayenne":     { type: "suv",   engine: "3.0L Turbo V6",          mpg: "17/22" },
    "Taycan":      { type: "sedan", engine: "Dual-Motor Electric",    mpg: "79/80" }
  },
  "Rivian": {
    "R1T": { type: "truck", engine: "Quad-Motor Electric", mpg: "74/66" },
    "R1S": { type: "suv",   engine: "Quad-Motor Electric", mpg: "73/65" }
  },
  "Rolls-Royce": {
    "Ghost":    { type: "sedan", engine: "6.75L Twin-Turbo V12", mpg: "12/19" },
    "Phantom":  { type: "sedan", engine: "6.75L Twin-Turbo V12", mpg: "12/19" },
    "Cullinan": { type: "suv",   engine: "6.75L Twin-Turbo V12", mpg: "12/20" },
    "Wraith":   { type: "coupe", engine: "6.6L Twin-Turbo V12",  mpg: "12/21" },
    "Dawn":     { type: "coupe", engine: "6.6L Twin-Turbo V12",  mpg: "12/19" },
    "Spectre":  { type: "coupe", engine: "Dual-Motor Electric",  mpg: "75 MPGe" }
  },
  "Saab": {
    "9-3":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "21/30" },
    "9-5":  { type: "sedan", engine: "2.0L Turbo 4-Cylinder", mpg: "20/29" },
    "9-7X": { type: "suv",   engine: "4.2L I6",               mpg: "14/19" }
  },
  "Saturn": {
    "Aura":    { type: "sedan", engine: "2.4L 4-Cylinder", mpg: "22/33" },
    "Ion":     { type: "sedan", engine: "2.2L 4-Cylinder", mpg: "26/35" },
    "Sky":     { type: "coupe", engine: "2.4L 4-Cylinder", mpg: "20/28" },
    "Vue":     { type: "suv",   engine: "2.4L 4-Cylinder", mpg: "22/29" },
    "Outlook": { type: "suv",   engine: "3.6L V6",         mpg: "17/24" },
    "Astra":   { type: "sedan", engine: "1.8L 4-Cylinder", mpg: "24/30" }
  },
  "Scion": {
    "tC":   { type: "coupe", engine: "2.5L 4-Cylinder", mpg: "23/31" },
    "xB":   { type: "suv",   engine: "2.4L 4-Cylinder", mpg: "22/28" },
    "xD":   { type: "sedan", engine: "1.8L 4-Cylinder", mpg: "27/33" },
    "FR-S": { type: "coupe", engine: "2.0L Flat-4",     mpg: "22/30" },
    "iQ":   { type: "sedan", engine: "1.3L 4-Cylinder", mpg: "36/37" },
    "iA":   { type: "sedan", engine: "1.5L 4-Cylinder", mpg: "33/42" }
  },
  "Suzuki": {
    "SX4":         { type: "sedan", engine: "2.0L 4-Cylinder", mpg: "23/30" },
    "Grand Vitara":{ type: "suv",   engine: "2.4L 4-Cylinder", mpg: "19/26" },
    "Kizashi":     { type: "sedan", engine: "2.4L 4-Cylinder", mpg: "23/30" },
    "Forenza":     { type: "sedan", engine: "2.0L 4-Cylinder", mpg: "22/30" },
    "Aerio":       { type: "sedan", engine: "2.3L 4-Cylinder", mpg: "25/31" }
  }
};
