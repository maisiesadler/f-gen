const fs = require('fs');

const write = (fileName, contents) => {
    const rs = fs.createWriteStream(fileName);
    rs.write(contents);
    rs.close();
};

exports.write = write;