#!/usr/bin/env node
const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const templateReader = require('./templateReader');
const write = require('./write');
const templateLocation = 'f-gen/output/_.template';

let template = templateReader.read(templateLocation);

const createFile = (fileLocation) => {
    if (templateLocation === fileLocation) {
        throw new Error('cannot write to template location');
    }
    const p = fileLocation.split('\\');
    let name = p[p.length - 1];
    try {
        template = templateReader.replace(template, name);
        write.write(fileLocation, template);

    } catch (e) {
        console.log(e);
    }
};

program
    .version('0.0.1')
    .description('File generator');

program
    .command('createFile <location>')
    .alias('cf')
    .description('Create File')
    .action(name => createFile(name));

program.parse(process.argv);