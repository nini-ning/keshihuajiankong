/*
 * @Author: your name
 * @Date: 2021-06-24 18:42:11
 * @LastEditTime: 2021-07-02 12:08:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts\Koa_Server\middleware\koa_response_duration.js
 */
//计算服务器消耗时长的中间件
// module.exports=async(ctx,next)=>{
//     //记录开始时间
//     const start=Date.now();
//     //让内层中间件得到执行
//     await next();
//     //记录结束时间
//     const end=Date.now();
//     //设置响应头X-Response-Time
//     const duration=end-start
//     //ctx.set设置响应头
//     ctx.set('X-Response-Time',duration+'ms')
// }
module.exports=async(ctx,next)=>{
    const start=Date.now();
    await next();
    const end=Date.now();
    const duration=end-start;
    ctx.set('X-Response-Time',duration+'ms')
}