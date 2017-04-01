const fs = require('fs');
const path = require('path');
const entryDirectory = './src/ts/entry/';
const entryFiles = fs.readdirSync(entryDirectory);
let output = {
    entry: {},
    plugins: [],
    module: {
        rules: []
    },
    resolve: {
        extensions: []
    }
};
output.resolve.extensions.push('.js');
output.resolve.extensions.push('.ts');
let entries = entryFiles.map(function(entry) {
    return entry.replace(/\.tsx?/, '');
});

output.output = {
    path: path.join(__dirname, "/dist"),
    publicPath: "",
    filename: '[name].js',
    library: 'MusicHybrid',
    libraryTarget: 'umd'
};
//typescript
entries.forEach(function(entry) {
    output.entry[entry] = entryDirectory + entry + '.ts';
});
output.module.rules.push({
    test: /\.tsx?$/,
    use: [{
        loader: "ts-loader",
        options: {
            exclude: './node_modules/'
        }
    }]
});
module.exports = output;
