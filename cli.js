const fs = require('fs-extra');

module.exports = () => {
  fs.remove('./.framework').then(() => {
    fs.copy(__dirname + '/framework', './.framework');
  });
}
