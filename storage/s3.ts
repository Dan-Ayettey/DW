const AWS =require('aws-sdk')
import { readFileSync } from "fs";

// Upload file to s3
// SECRET AND ID need for upload on AWS S3
export const uploadFile= (fileName: string, bucketName: string, res: any)=> {

    const SECRET = ''
    const ID = ''




    const s3 = new AWS.S3({
        secretAccessKey: SECRET,
        accessKeyId: ID
    })


    const paramsUpload = {
        Bucket: bucketName,
        Key: fileName, // File name you want to save as in S3
        Body: readFileSync(__dirname + '/DW.json')
    };
   return  s3.upload(paramsUpload, function (err: any, data:any) {

        if (err) {
            console.log( err.message);
            res.status(401).json({isOk:false,mgs:err.message})
        }else {
            res.status(201).json({isOk:true})
            console.log(`File uploaded successfully`);
        }


    });
}

// create bucket
// SECRET AND ID need for AWS S3
export const createBucket=(bucketName:string)=>{
    const SECRET = ''
    const ID = ''


    const s3 = new AWS.S3({
        secretAccessKey: SECRET,
        accessKeyId: ID
    })
    const params = {
        Bucket: bucketName.trim(),
        CreateBucketConfiguration: {
            // Set your region here
            LocationConstraint: "eu-west-1"
        }
    };

   return  s3.createBucket(params, function (err:any, data:any) {
        if (err)
            console.log(err, err.message)
        else console.log('Bucket Created Successfully');
    });

}
