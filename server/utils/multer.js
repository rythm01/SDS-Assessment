const multer = require("multer");
const cloudinary = require('./cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'SDS_DOCS', // Cloudinary folder name
    format: async (req, file) => file.mimetype.split('/')[1], // Extracts file format from MIME type
    public_id: (req, file) => {
      const id = Date.now();
      return `user_${id}`; // Unique public ID for the file on Cloudinary
    },
  },
});

const upload = multer({ storage });

module.exports = { upload };