const { S3 } = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

exports.s3uploadv2 = async (files) => {
  if (!files || !Array.isArray(files)) {
    return;
  }

  const s3 = new S3();

  try {
    const uploadPromises = files.map((file) => {
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuidv4()}-${file.originalname || "unknown"}`,
        Body: file.buffer,
      };
      return s3.upload(params).promise();
    });

    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    console.log("error uploading file:", error);
    throw error; // Rethrow the error to handle it elsewhere, if necessary
  }
};
