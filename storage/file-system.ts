import { fetchInstanceExternal, fetchInstanceInternal } from "../fetchInstance/fetchInstance";
import { plan } from "../schedule/shift";
import {writeFile,readFileSync,readFile } from 'fs';

// schedule function
 export  const schedule= (res: any)=>{

      plan(20,(async () => {
     let merge= {
     products:[] as any
    }

            const productResults=await fetchInstanceExternal('products');
            const imagesResults=await fetchInstanceExternal('images');
            productResults ? productResults.data:[]
            imagesResults ? imagesResults.data:[]
            merge.products=Object(productResults).data.products.concat(Object(imagesResults).data.images)
            writeAndMergeFile(JSON.stringify(merge.products),res)
    }))


}


// merge file
const  writeAndMergeFile=(buffer:string,res:any)=>{
        try {
            writeFile(__dirname+'/DW.json',buffer,(err)=>{
                err? res.status(424).json({isok:true,mg:'merge was unsuccessful'}):res.status(200).json({isok:true,mg:'merge was successful'})
            });
        } catch (e) {
          console.log(e)
        }
}

//ON ready state file creation
(()=>{
    try {
        readFileSync(__dirname+'/DW.json',{encoding:'utf8',flag:'wx'})
           console.log('File was created')
    }catch (e) {
        console.log(e.message)
    }
})()

// Read file
export const reader=(id:any,callback: { (data: any): void})=>{
    try {
        readFile(__dirname+'/DW.json', function (err, data) {

            if (err) {
                callback('Product does not exist, merge product must be merge with endpoint api/v1/merges')
                return console.error(err.message);
            }else{
                const products=JSON.parse(data.toString('utf8')).filter(((data: { [x: string]: any; sku: string; })=> data.sku===id))
                JSON.parse(data.toString('utf8')).filter(((result: { [x: string]: any; sku: string; })=> result[id] !=undefined ? products.push(...result[id]):[]));
                callback(products)
            }

        });

    }catch (e) {
        console.log(e.message)
    }

}

