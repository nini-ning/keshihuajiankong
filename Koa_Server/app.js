/*
 * @Author: your name
 * @Date: 2021-06-24 18:38:17
 * @LastEditTime: 2021-07-06 11:17:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts\Koa_Server\app.js
 */
//入口文件
const Koa=require('koa')
const app=new Koa();
//指定中间件
//绑定第一层中间件
const responseDurationMiddleware=require('./middleware/koa_response_duration')
app.use(responseDurationMiddleware)
//绑定第二层中间件
const responseHeaderMiddleware=require('./middleware/koa_response_header')
app.use(responseHeaderMiddleware)
//绑定第三层中间件
const responseDataMiddleware=require('./middleware/koa_response_data')
app.use(responseDataMiddleware)
app.listen(8888)
// //创建对象
// const WebSocket=require('ws')
// //创建websocket服务器端对象，绑定的端口号是9998
// const wss=new WebSocket.Server({
//     port:9998
// })
// //监听事件,对客户端的连接事件进行监听
// //连接事件,代表的是客户端的连接socket对象
// wss.on("connection",client=>{
//     console.log("有客户端连接登录")
// })
// //接收数据事件
// wss.on("connection",client=>{
//     //对客户端的连接对象进行message事件的监听
//     client.on("message",msg=>{
//         console.log("接收到了客户端发过来的数据"+msg) 
//         //发送数据
//     client.send('我是服务端数据我来了客户端')
//     })
    
// })
const webSocketService = require('./service/web_socket_service')
// 开启服务端的监听, 监听客户端的连接
// 当某一个客户端连接成功之后, 就会对这个客户端进行message事件的监听
webSocketService.listen()