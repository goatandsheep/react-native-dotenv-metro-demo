module.exports = function(api) {
    api.cache(false);
    const presets = [['@babel/preset-env',
    {
        "targets": {
            "chrome": "58",
            "ie": "11"
        }
    }], '@babel/preset-react'];
    const plugins = [
        ['module:react-native-dotenv', {
            'moduleName': 'react-native-dotenv'
        }]
    ];
    return {
        presets,
        plugins
    }
}
