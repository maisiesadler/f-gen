#!/usr/bin/env node
const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const replace = require('./replace');
const tempate = require('./template');
const write = require('./write');
const templateLocation = '_.template';

const get_template = tempate.getTemplateFn(templateLocation);


const createFile = (fileLocation) => {
    if (templateLocation === fileLocation) {
        throw new Error('cannot write to template location');
    }
    const p = fileLocation.split('/')
    let name = p[p.length - 1];
    let template = get_template();
    try {
        template = replace.replace(template, name);
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