//import http module
const http = require('http')
const urlModule = require('url')

//create server http
const server=http.createServer()

//on request
server.on('request', function(req, res){
    //const url=req.url
    const{pathname: url, query} = urlModule.parse(req.url, true)
    if(url==='/getscript')
    {
        var data={
            name:'leier',
            age: 20,
            gender: 'female'

        }
        //拼接一个合法的js脚本，这里拼接的是一个方法的调用
        var scriptStr=  `${query.callback}(${JSON.stringify(data)})`//把data转换成json字符串作为参数
        //res.end发送给客户端 客户端吧这个字符串当作JS代码去解析执行
        return res.end(scriptStr)
    }else{
        res.end('404')
    }
})

//start listen
server.listen(3000, function(){
    console.log('server listen at http://127.0.0.1:3000')
})