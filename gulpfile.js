/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = "./public/assets/css";
uswds.paths.dist.img = "./public/uswds/img";
uswds.paths.dist.fonts = "./public/uswds/fonts";
uswds.paths.dist.theme = "./sass";

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.updateUswds = uswds.updateUswds;
exports.default = uswds.watch;
