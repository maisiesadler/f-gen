const fs = require('fs');

const getTemplateFn = (templateLocation) => {
    return () => {
        return fs.readFileSync(templateLocation, "utf8");
    }
};

exports.getTemplateFn = getTemplateFn;