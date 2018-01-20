#!/usr/bin/env node
const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const coordinator = require('./coordinator');
const configReader = require('./configReader');
const write = require('./write');

const createFile = (location, name) => {
    coordinator.go(location, name);
};

const createConfig = () => {
    const config = configReader.createExampleConfig();
    write.write('config.json', JSON.stringify(config));
};

program
    .version('0.0.1')
    .description('File generator');

program
    .command('createFile <location> <name>')
    .alias('cf')
    .description('Create File')
    .action((location, name) => createFile(location, name));

program
    .command('createConfig')
    .alias('cc')
    .description('Create config')
    .action(() => createConfig());

program.parse(process.argv);