const AWS = require('aws-sdk');

let s3 = false;

try {
  const credentials = require('../credentials.js');
  s3 = new AWS.S3({
    accessKeyId: credentials.access_id,
    secretAccessKey: credentials.secret,
  });
} catch(e) {
  console.log("Couldn't load credentials");
}

module.exports = {
  getObject: (fileName, cb) => {
    if (!s3) {
      return cb(false, false);
    }
    s3.getObject({
      Bucket: "avataaars.io",
      Key: fileName,
    }, cb)
  },
  uploadFile: (fileName, fileContent) => {
    if (!s3) return;

    const params = {
      Bucket: 'avataaars.io',
      Key: fileName,
      ContentType: 'image/png',
      Body: fileContent,
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
      if (err) {
        throw err;
      }
      //console.log(`File uploaded successfully. ${data.Location}`);
    });
  },
};

