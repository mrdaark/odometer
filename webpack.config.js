const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const fs = require('fs');


const getEntries = () => {
    const entries = fs.readdirSync('./sass/').filter(function(file) {
        return file.match(/odometer.*\.sass$/);
    }).map((file)=> './sass/' + file);
    entries.push('./odometer.coffee');
    return entries;    
}

module.exports = (env) => {
    console.log(env);
    const devMode = env && !!env.DEV;
    return {
        entry: getEntries(),
        mode: (devMode) ? 'development' : 'production',
        target: 'web',
        output: {
            path: __dirname,
            filename: 'odometer.bundle.js',
            library: 'Odometer',
        },
        optimization: {
            minimizer: [
              new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
              }),
              new OptimizeCSSAssetsPlugin({})
            ]
        },
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'ruby-sass-loader?compass']
                },
                {
                    test: /\.coffee$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        },
                        'coffee-loader'
                    ]
                }
            ]
        }
    }
}