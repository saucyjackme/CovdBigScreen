module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://apis.juhe.cn',
              changeOrigin: true,
              pathRewrite: { // pathRewrite 重写路径
                "^/api": ""
              }
          }
      },
      publicPath: process.env.NODE_ENV === 'production'
      ? '/covid19' : '/'
  },
}