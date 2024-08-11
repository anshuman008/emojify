"use server"

import { connectDb } from "@/config/db";
import encryptionModel from "@/models/Encyptions";

const decryptMsg = async(formData:FormData) =>{

 console.log('heloo world!!')
   let  encryption = formData.get('encryption') as string;
   const password = formData.get('password') as string;
   
     if(encryption){
       encryption = encryption.trim();
     }
     await connectDb();
   
     const responce = await encryptionModel.find({encryption,password});

    if(responce.length){
        // return responce?.content;

        return responce[0].content;
    }
 
   return "error";
} 

export default decryptMsg;