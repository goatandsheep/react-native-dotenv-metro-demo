module.exports = function(api) {
    api.cache(false);
    const presets = ['module:metro-react-native-babel-preset']
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
