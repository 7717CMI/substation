const fs = require('fs');
const path = require('path');

// Function to calculate 2033 value based on growth from 2031 to 2032
function calculate2033Value(value2031, value2032) {
  if (!value2031 || !value2032) return 0;
  const growthRate = (value2032 - value2031) / value2031;
  return parseFloat((value2032 * (1 + growthRate)).toFixed(1));
}

// Function to process nested object, add 2033 data, and remove 2020 data
function updateYearRange(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // Check if this object has year keys (2020, 2021, etc.)
  const keys = Object.keys(obj);
  const hasYearKeys = keys.some(k => /^20[0-9]{2}$/.test(k));

  if (hasYearKeys) {
    // This is a time series object
    const value2031 = obj['2031'];
    const value2032 = obj['2032'];

    // Add 2033 based on 2031-2032 growth
    if (value2031 && value2032) {
      obj['2033'] = calculate2033Value(value2031, value2032);
    }

    // Remove 2020 data
    delete obj['2020'];

    return obj;
  }

  // Recursively process nested objects
  for (const key in obj) {
    obj[key] = updateYearRange(obj[key]);
  }

  return obj;
}

// Process value.json
console.log('Processing value.json...');
const valuePath = path.join(__dirname, '../public/data/value.json');
const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));
const updatedValueData = updateYearRange(valueData);
fs.writeFileSync(valuePath, JSON.stringify(updatedValueData, null, 2));
console.log('✓ value.json updated: removed 2020 data, added 2033 data');

// Process volume.json
console.log('Processing volume.json...');
const volumePath = path.join(__dirname, '../public/data/volume.json');
const volumeData = JSON.parse(fs.readFileSync(volumePath, 'utf8'));
const updatedVolumeData = updateYearRange(volumeData);
fs.writeFileSync(volumePath, JSON.stringify(updatedVolumeData, null, 2));
console.log('✓ volume.json updated: removed 2020 data, added 2033 data');

console.log('\n✅ All files updated successfully! Year range is now 2021-2033.');
