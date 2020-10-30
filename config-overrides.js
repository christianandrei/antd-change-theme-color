const path = require("path");
const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackPlugin
} = require("customize-cra");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");

const options = {
    stylesDir: path.join(__dirname, "./src/styles"),
    antDir: path.join(__dirname, "./node_modules/antd"),
    varFile: path.join(__dirname, "./src/styles/vars.less"),
    themeVariables: ["@primary-color"],
    indexFileName: "index.html"
};

module.exports = override(
    fixBabelImports("antd", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
    }),
    addWebpackPlugin(new AntDesignThemePlugin(options)),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true
        }
    })
);
