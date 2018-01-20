const configReader = require('./configReader');
const templateReader = require('./templateReader');
const fs = require('fs');
const write = require('./write');

const go = (configLocation, name) => {
    const config = configReader.readAndValidate('config.json');
    const dir = fs.readdirSync(config.template);
    fs.mkdirSync(name);
    dir.forEach(fileName => {
        const template = templateReader.read(config.template + '/' + fileName);
        const filename = templateReader.replace(fileName, name);
        write.write(name + '/' + filename, templateReader.replace(template, name));
    });
}

// const p = fileLocation.split('\\');
// let name = p[p.length - 1];

// let template = templateReader.read(templateLocation);
// template = templateReader.replace(template, name);


exports.go = go;