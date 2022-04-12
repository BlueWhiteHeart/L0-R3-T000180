'use strict'
const fs = require('fs')
class FileTool {
    constructor(dir,dest){
     this.dir = dir;
     this.dest = dest;
    }
    removeFile(dir) {
        const res = fs.readdirSync(dir);
        res.forEach(e=>{
        try {
            fs.unlinkSync(dir+'/'+e)
        } catch (error) {
            console.log(error)
        }
        })
    }
    doStream(oldDir,dest) {
        return new Promise((resolve, reject) => {
            const rs = fs.createReadStream(oldDir)
            const ws = fs.createWriteStream(dest)
            rs.pipe(ws)
            ws.on('finish',()=>{
                resolve();
            })
          })
    }
}
module.exports = FileTool