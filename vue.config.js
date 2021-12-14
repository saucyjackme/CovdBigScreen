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
      }
  },
}