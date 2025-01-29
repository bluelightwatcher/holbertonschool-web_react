const path = require('path');

module.exports = {
    entry: './src/index.ts', // Relative to the TypeScript directory
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), // Output in the TypeScript/dist folder
    },
    resolve: {
        extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development', // You can also set this to 'production'
};
