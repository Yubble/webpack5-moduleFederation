const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const resolve = p => path.resolve(__dirname, p)
const VueLoaderPlugin  = require('vue-loader/dist/pluginWebpack5').default
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].js'
  },
  devServer: {
    port: 8462,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "GET,POST,PUT,OPTIONS"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'lib_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './list': './src/components/list.vue'
      },
      shared: {
        vue: {
          eager: true,
          singleton: true
        }
      }
    })
  ]
}
