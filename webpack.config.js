const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

    console.log(env);
    return {
        context: path.join(__dirname, 'src'),
        entry: '../index.js',
        mode: env.dev ? 'development' : 'production',
        devtool: env.dev ? 'source-map' : false,

        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist')
        },

        resolve: {
            extensions: ['.js', '.jsx']
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ],

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                }
            ]
        },

        watch: env.dev
    }
};