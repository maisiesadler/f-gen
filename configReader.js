const fs = require('fs');

const read = (configLocation) => {
    return JSON.parse(fs.readFileSync(configLocation, "utf8"));
};