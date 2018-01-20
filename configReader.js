const fs = require('fs');

const read = (configLocation) => {
    return JSON.parse(fs.readFileSync(configLocation, "utf8"));
};

const validateConfig = (config) => {
    if (config.template) {
        const exists = fs.existsSync(config.template);
        if (!exists) throw new Error('output file ' + config.template + ' does not exist!');
    }
    if (!config.extensions){
        config.extensions = ['*.js'];
    }
    return config;
};

exports.readAndValidate = (location) => {
    const config = read(location);
    return validateConfig(config);
};

exports.createExampleConfig = () => {
    return {
        template: 'folder-location',
        extensions: ['*.js']
    };
};