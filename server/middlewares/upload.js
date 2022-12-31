const multer = require('multer')
const path = require('path')
const fs = require('fs');

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        const folderName = `uploads/${req.body.author.split(' ').join('').toLowerCase()}/`;
        try {
            if (!fs.existsSync(folderName)) {
              fs.mkdirSync(folderName);
            }
          } catch (err) {
            console.error(err.message);
          }
        cb(null,folderName)
      },
    filename: (req,file,cb) => {
        return cb(null, `${req.body.title.split(' ').join('')}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage})

module.exports = upload;