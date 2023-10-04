const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: '/src/app/main.tsx',
    // entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@components': path.resolve(__dirname, 'src/app/core/components/'),
            '@context': path.resolve(__dirname, 'src/app/core/context/'),
            '@hooks': path.resolve(__dirname, 'src/app/core/hooks/'),
            '@routes': path.resolve(__dirname, 'src/app/core/routes/'),
            '@styles': path.resolve(__dirname, 'src/app/core/styles/'),
            '@models': path.resolve(__dirname, 'src/app/core/models/'),
            '@utils': path.resolve(__dirname, 'src/app/core/utils/'),
            "@views": path.resolve(__dirname, "src/app/views/"),
            "@services": path.resolve(__dirname, "src/app/services/"),
            "@environments": path.resolve(__dirname, "src/environments/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        allowedHosts: path.join(__dirname, 'dist'),
        compress: true,
        port: 3001
    }
}
