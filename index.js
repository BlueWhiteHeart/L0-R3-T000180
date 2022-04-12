'use strict'
const fs = require('fs')
const FileTool = require('./lib/file')
/*
1.先清除历史文件
2.通过Stream流来读取和生成文件
*/

// 读取这个文件夹下的文件
const oldDir = __dirname + '/File'
// 新文件夹存放新生成的文件
const newDir = __dirname + '/NewFile'
const fileTool = new FileTool();

let str = '';
// 判断文件目录是否存在
(async function getDirStat() {
    const oldDirStat = fs.existsSync(oldDir);
    const newDirStat = fs.existsSync(newDir);
    if(!oldDirStat) {
        str = 'File文件目录不存在'
    }
    if(!newDirStat) {
        str = 'NewFile文件目录不存在'
    }
})();
if(str) {
    console.log(str);
    return;
}
// 初始化文件夹
fileTool.removeFile(newDir);

const res = fs.readdirSync(oldDir);
res.forEach( async (e)=>{
    const file = oldDir + '/' + e;
    const newFIle = newDir + '/' + 'stream-' + e;
    console.time(e+' 文件耗时：');
    await fileTool.doStream(file,newFIle); // 用Stream来生成文件
    console.timeEnd(e + ' 文件耗时：');
})

