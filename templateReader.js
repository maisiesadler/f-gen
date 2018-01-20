const fs = require('fs');

const read = (templateLocation) => {
    return fs.readFileSync(templateLocation, "utf8");
};

const capitalise = (s) => {
    return s.charAt(0).toUpperCase() + s.substring(1);
}

const lowercase = (s) => {
    return s.charAt(0).toLowerCase() + s.substring(1);
}

const upper = '--U';
const lower = '--L';
const regular = '--N';

const convert = (original) => {
    const parts = original.split('-');
    return parts.map(p => capitalise(p)).join('');
};

const replaceEveryInstanceOf = (original, replace, replaceWith) => {
    while (original.indexOf(replace) > -1) {
        original = original.replace(replace, replaceWith);
    }
    return original;
}

const replace = (template, name) => {
    const cname = convert(name);
    template = replaceEveryInstanceOf(template, upper, cname);
    template = replaceEveryInstanceOf(template, regular, name);
    template = replaceEveryInstanceOf(template, lower, lowercase(cname));
    return template;
}

exports.replace = replace;
exports.read = read;