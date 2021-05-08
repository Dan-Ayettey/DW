import {Router } from 'express';
import { reader, schedule } from "../storage/file-system";
import { createBucket, uploadFile } from "../storage/s3";

// Export module for registering router in express app
 const router: Router = Router();


//product by id
router.get("/api/v1/products/:id", (req:any, res:any) => {
  const {body,params}=req
  reader(params.id || body.id,(data)=>{
    res.status(200).json(data)
  })

});
//root
router.get("/", (req:any, res:any) => {

    res.status(200).json({dw_api_ver:1})

});



// upload file by file name
router.post("/api/v1/uploadfiles", (req:any, res:any) => {
  const {query,body}=req
  uploadFile(query.filename || body.filename,query.bucketname || body.bucketname,res)


});
//schedule and merge files
router.get("/api/v1/merges", (req:any, res:any) => {

  schedule(res)
});
// create aws bucket, name has to unique
router.post("/api/v1/createbuckets", (req:any, res:any) => {
  const {body,query}=req

  const message=createBucket(query.bucketname || body.bucketname)
  message.on('error',(e:any)=>{
    res.status(406).json(e.message)
  })
  message.on('success',(success:any)=>{
    res.status(200).json(success.data)
  })

});

export default router
