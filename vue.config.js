// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
// 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
// 你需要在开发环境下将 API 请求代理到 API 服务器。
// 这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
module.exports = {
  // devServer.proxy 可以是一个指向开发环境 API 服务器的字符串：
  devServer: {
    port: "8080", // 设置端口号
    proxy: {
      "/api": {
        target:
          "https://www.fastmock.site/mock/455f80abd4c9748b444fd60d47592e1a/sell",
        ws: true,
        changeOrigin: true,
        // 重写路径，在服务器网址之后忽略掉api,
        // "api"只是在api/index.js中用来匹配的，
        // 但是服务端并没有这个路径，所以需要忽略
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
