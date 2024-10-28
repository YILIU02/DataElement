const { defineConfig } = require('@vue/cli-service')
// const port = 3000; // 端口配置
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
    proxy: {
        '/api': {    //1
            target: 'http://8.138.164.36:8081',    //2
            changOrigin: true,
            pathRewrite: {    //3
                 '^/api': ''
            }
        }
    }
  },

  publicPath: './',//修改目录
  outputDir: 'dist', // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  assetsDir: 'assets', // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: true, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
}
)
