const fs = require('fs');

const write = (fileLocation, contents) => {
    const rs = fs.createWriteStream(fileLocation);
    rs.write(contents);
    rs.close();
};

exports.write = write;