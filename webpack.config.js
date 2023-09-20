//para configurar la empaquetación, que sería básicamente reducir el código que vayamos a publicar

const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  mode: 'development', //!production or development => tipo de compresión, la mayor es la de production
  entry: {
    'index': './index.ts'
  }, //! archivo donde inicia la api
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js', //! => me indica que lleva el nombre normal del archivo con extensión .js
    publicPath: '/'
  }, //! donde quiero que guarde la salida de la api
  target: 'node', //! tipo de target a utilizar en el proyecto, node
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }, //! REGLAS => tipos de archivo que queremos transpilar
  resolve: {
    extensions: [
      '.tsx', '.ts', '.js'
    ]
  },
  externals: [nodeExternals()]
}