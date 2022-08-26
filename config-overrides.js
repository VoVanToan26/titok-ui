const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    //eslint-disable-next0line react-hook/rules-of-hook
    useBabelRc()
);
