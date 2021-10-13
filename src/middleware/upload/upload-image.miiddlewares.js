const multer = require("multer");
const mkdirp = require("mkdirp");

const uploadImage = (type) => {
  const made = mkdirp.sync(`./public/images/${type}`);

  const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `./public/images/${type}`);
    },
    filename: function (req, file, callback) {
      callback(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      const extensionImageList = ["png", "jpg", "jpeg"];
      const words = file.originalname.split(".");
      const extension = words[words.length - 1].toLowerCase();
      if (extensionImageList.includes(extension)) {
        cb(null, true);
      } else {
        cb(new Error("File khong hop le"));
      }
    },
  });
  return upload.single(type);
};

module.exports = {
  uploadImage,
};
