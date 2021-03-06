export const IAM_ID = String(process.env.IAM_ID);
export const IAM_SECRETKEY = String(process.env.IAM_SECRETKEY);
export const BUCKET_NAME = String(process.env.BUCKET_NAME);
export const S3_REGION = String(process.env.S3_REGION);
export const S3_URL =
  "https://" + BUCKET_NAME + ".s3-" + S3_REGION + ".amazonaws.com/";
