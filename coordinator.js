const configReader = require('./configReader');
const templateReader = require('./templateReader');
const fs = require('fs');
const write = require('./write');

const configLocation = 'config.json';

const go = (templateName, name) => {
    const configs = configReader.readAndValidate(configLocation);
    if (configs.hasOwnProperty(templateName)) {
        const config = configs[templateName];
        const dir = fs.readdirSync(config.location);
        fs.mkdirSync(name);
        dir.forEach(fileName => {
            const template = templateReader.read(config.location + '/' + fileName);
            const filename = templateReader.replace(fileName, name);
            write.write(name + '/' + filename, templateReader.replace(template, name));
        });
    } else {
        console.log('cant find it, soz');
    }
}

// const p = fileLocation.split('\\');
// let name = p[p.length - 1];

// let template = templateReader.read(templateLocation);
// template = templateReader.replace(template, name);


exports.go = go;