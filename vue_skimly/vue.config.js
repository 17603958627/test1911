module.exports = {
    // 项目打包出来的css 以及js引入时的方式，默认是绝对形式 publicPath: '/' - /js/a.js -- 一般用于将项目部署在服务器的根目录下
    // 相对路径 publicPath: './',    js/a.js
    publicPath: './',
    // 打包项目时打包的文件夹,默认值为dist，可以修改
    outputDir: 'dist',
    // 代理服务器
    devServer: {
        // 字符串形式，它只能代理一个服务器，还有对象形式
        // http://localhost:3000/api/pro  ===>  /api/pro
        proxy: 'http://localhost:3000'
    }
}