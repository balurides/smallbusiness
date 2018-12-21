const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  entry: ['./src/index.js',
          './style/style.css'],
  output: {
          publicPath: '/',
          path: path.join(__dirname, 'dist/'),
          filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:[ {
            loader:'babel-loader',
            options: { babelrcRoots: ['.', '../'] },
            // options: { babelrcRoots: ['.', './node_modules/react-pdf'] },
            }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    outputPath: "assets/"
                }
            }
        ]
    }
    ]
  },
    
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
   
  plugins: [
    new HtmlWebpackPlugin({
      template:"./index.html"
    })],
};