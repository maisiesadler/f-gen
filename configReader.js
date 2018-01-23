const fs = require('fs');

const read = (configLocation) => {
    return JSON.parse(fs.readFileSync(configLocation, "utf8"));
};

const getValidConfigs = (config) => {
    const validConfigs = {};
    const keys = Object.keys(config);
    keys.forEach(key => {
        const c = config[key];
        const x = getValidConfigOrNull(c);
        if (x !== null) {
            validConfigs[key] = x;
        } else {
            console.log(`config ${key} is not valid`);
        }
    });
    return validConfigs;
};

const getValidConfigOrNull = (config) => {
    if (config.location) {
        const exists = fs.existsSync(config.location);
        if (!exists) return null;
        // if (!exists) throw new Error('output file ' + config.location + ' does not exist!');
    }
    if (!config.extensions) {
        config.extensions = ['*.js'];
    }
    return config;
};

exports.readAndValidate = (location) => {
    const config = read(location);
    return getValidConfigs(config);
};

exports.createExampleConfig = () => {
    return {
        location: 'folder-location',
        extensions: ['*.js']
    };
};