module.exports = function(api) {
    api.cache.invalidate(() => process.env.NODE_ENV)
    console.log('env', process.env.NODE_ENV);
    console.log('benv', process.env.BABEL_ENV);
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
