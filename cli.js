const fs = require('fs-extra');

module.exports = () => {
  fs.remove('./.components').then(() => {
    fs.copy(__dirname + '/components', './.components');
  });
}
