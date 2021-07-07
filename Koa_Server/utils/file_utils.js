/*
 * @Author: your name
 * @Date: 2021-06-24 18:44:28
 * @LastEditTime: 2021-07-02 13:34:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts\Koa_Server\utils\file_utils.js
 */
//读取文件的工具方法
// const fs=require('fs')
// module.exports.getFileJsonData=(filePath)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filePath,'utf-8',(error,data)=>{
//             if(error){
//                 //读取文件失败
//                 reject(error)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }
const fs=require('fs')
module.exports.getFileJsonData=(filePath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'utf-8',(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
        })
    })
}