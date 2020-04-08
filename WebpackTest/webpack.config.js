const path = require('path')
const webpack = require('webpack');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'./src/index.js'),
    devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        //--open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启用热更新 的 第1步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            filename: 'index.html' // 指定生成的页面的名称
        }),
        new vueLoaderPlugin()
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'] 
            },
            {
                test:/\.vue$/,
                exclude: /node_modules/,
                use:['vue-loader']
            }
            //  配置处理 .css 文件的第三方loader 规则   调用顺序从右到左
        ]
        // 当我们在 控制台，直接进行 webpack 命令执行的时候，webpack 做了以下几步：
    //  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
    //  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
    //  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
    //  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；
    },
    resolve: {
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

};