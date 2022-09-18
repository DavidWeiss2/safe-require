const path = require("path");

const safeRequire = () => {
  module.constructor.prototype.require = function (id) {
    try {
      return this.constructor._load(id, this);
    } catch (originalError) {
      const pkgJson = this.constructor._load(
        path.join(id, "package.json"),
        this
      );
      try {
        return this.constructor._load(path.join(id, pkgJson.main), this);
      } catch (e) {
        throw originalError;
      }
    }
  };
};
safeRequire();
module.exports = safeRequire;
