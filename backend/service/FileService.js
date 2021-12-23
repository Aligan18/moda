const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

class FileService {

    saveFile =(file)=>{
       try {
            const fileName= uuid.v4() + ".jpg"
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName

       } catch (error) {
           console.log(error)
       }
    }


    deletFile = (fileName)=>{

        fs.unlink(`static/${fileName}`, (err) => {
            if (err) throw err;
          
            console.log('Deleted');
          });
    }

    
}

module.exports = new FileService();