/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const prod = process.env.NODE_ENV === 'production'

const config =  {
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    stats: 'minimal',
    mode: prod ? 'production' : 'development',
    devtool: prod ? false : 'source-map',
    devServer: {
        open: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
}

module.exports = config