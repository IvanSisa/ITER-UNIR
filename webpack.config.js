const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env) => {
    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: 'babel-loader'  
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                   test: /\.(scss|css)$/,
                   use: ['style-loader','css-loader','sass-loader'] 
                },
                {
                    test: /\.(jpg|png)/,
                    use: 'file-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public/index.html')
            }),
            new Dotenv({
                path: `./.env${env.file ? `.${env.file}`:''}`
            })
        ],
        devServer: {
            port: 3000,
            open: true,
            historyApiFallback: true
        }
    }
}