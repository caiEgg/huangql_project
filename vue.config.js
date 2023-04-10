const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置跨域。 当我们在浏览器中看到请求的地址为：http://localhost:8080/api，
  // 实际上访问的地址是 http://gmall-h5-api.atguigu.cn  浏览器--代理服务器----真正的服务器
  devServer: {
    host:'localhost',
    proxy:{
      'api':{
        target:'http://gmall-h5-api.atguigu.cn',
        changeOrigin:true
      },
     /*  'api/list':{
        target:'http://47.93.148.192',
        changeOrigin:true
      } */
      
    }
  },
  lintOnSave:false,
  configureWebpack: {
    
    devtool: 'source-map'
  },
  
  
})
