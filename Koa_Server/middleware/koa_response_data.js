/*
 * @Author: your name
 * @Date: 2021-06-24 18:41:40
 * @LastEditTime: 2021-07-02 14:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts\Koa_Server\middleware\koa_response_data.js
 */
//处理业务逻辑的中间件，读取某个json文件的数据
// const path=require('path');
// const fileUtils=require('../utils/file_utils')
// module.exports=async(ctx,next)=>{
//    const url=ctx.request.url
//    let filePath=url.replace('/api','')///api/seller换成/seller
//    filePath='../data'+filePath+'.json' //..data/seller.json
//    //将文件的响应路径和请求路径拼接
//    filePath=path.join(__dirname,filePath)//Koa_Server\data\favicon.ico.json
//    console.log(filePath) 
//    try {
//        const ret=await fileUtils.getFileJsonData(filePath);
//        ctx.response.body=ret
//    } catch (error) {
//        const errormessage={
//            message:'读取资源失败文件内容不存在',
//            status:404
//        }
//        ctx.response.body=JSON.stringify(errormessage)
      
//    }
//    console.log(filePath)
//    await next()
// }
const path=require('path');
const fileUtils=require('../utils/file_utils')
module.exports=async(ctx,next)=>{
    const url=ctx.request.url;
    let filePath=url.replace('/api','')
    filePath='../data'+filePath+'.json'
    filePath=path.join(__dirname,filePath)
    try{
        const ret=await fileUtils.getFileJsonData(filePath)
        ctx.response.body=ret
    }catch(error){
        const errormessage={
            message:'读取文件资源失败文件内容不存在',
            status:404
        }
        ctx.response.body=JSON.stringify(errormessage)
    }
    //console.log(filePath)
    await next()
}