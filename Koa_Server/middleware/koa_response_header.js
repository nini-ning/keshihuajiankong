/*
 * @Author: your name
 * @Date: 2021-06-24 18:42:40
 * @LastEditTime: 2021-07-02 14:06:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts\Koa_Server\middleware\koa_response_header.js
 */
//设置响应头的中间件
// module.exports=async(ctx,next)=>{
//     //获取mime类型
//     const contentType='application/json; charset=utf-8'
//     //设置响应头，
//     ctx.set('Content-Type',contentType)
//     ctx.response.body={"success":true};
//     ctx.set("Access-Control-Allow-Origin", "*") 
//     ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE")
//     await next()
// }
module.exports=async(ctx,next)=>{
    const contentType='application/json; charset=utf-8'
    ctx.set('Content-Type',contentType)
    // ctx.response.body={"success":true};
    ctx.set("Access-Control-Allow-Origin", "*")
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE") 
   
    await next()
}