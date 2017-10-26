/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

const DIRECTORY = path.join(__dirname)

console.info(path.resolve(__dirname, 'node_modules/react-native-web-extended/dist/modules/ReactNativePropRegistry'));

module.exports = {
    devtool : 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname)
    },
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, 'index.js')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env', 'react'],
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                }],
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { name: '[name].[hash:16].[ext]' },
                }],
            },
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.API_HOST': JSON.stringify('http://' + require('my-ip')() + ':3001/api')
        }),
    ],
    resolve: {
        alias: {
            'react-router': path.resolve(__dirname, '../..', 'node_modules/react-router'),
            'react/lib/ReactNativePropRegistry': path.resolve(__dirname, 'node_modules/react-native-web-extended/dist/modules/ReactNativePropRegistry'),
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-native': path.resolve(__dirname, 'node_modules/react-native-web-extended'),
            'native-base': path.resolve(__dirname, '../..', 'node_modules/native-base-web'),
            //Icon.TabBarItem
            'react-native-vector-icons/Ionicons': 'native-base-web/lib/Components/Widgets/Icon',
        },
        extensions: [ '.web.js', '.js' ]
    }
}
