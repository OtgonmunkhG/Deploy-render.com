const uploader = require("multer");

module.exports = uploader({
  storage: uploader.diskStorage({}),
  limits: { fileSize: 10000000 },
});
