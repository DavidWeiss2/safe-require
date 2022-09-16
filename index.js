const fs = require("fs");
const path = require("path");
const node_modulesPath = require("node_modules-path");

const safeRequire = (pkg) => {
  try {
    return require(pkg);
  } catch (err) {
    const pkgDirPath = path.join(node_modulesPath(), pkg);
    const file = fs.readFileSync(path.join(pkgDirPath, "package.json"));
    const data = JSON.parse(file);
    const pkgIndexJsPath = path.join(pkgDirPath, data.main);
    return require(pkgIndexJsPath);
  }
};
module.exports = safeRequire;
