// import webpack from 'webpack';
const webpack = require('webpack');
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/admin-vue/dist' : '',
  publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'BASIC_URL': JSON.stringify(process.env.NODE_ENV === 'development' ? '' : '/admin-vue/dist')
      })
    ]
  }
};
