import  axios from 'axios'
 import config from "../config";


//axios instances

export const fetchInstanceExternal=(packageName:string)=>{
 return    axios.get( `https://assignment.dwbt.tech/${packageName}`)

}
export const fetchInstanceInternal=async (packageName:string)=>{

 try{
  return await axios.get( `http://localhost:${config.PORT}/${packageName}`)
 }catch (e) {
  console.log(e.message)
 }


}
