import mongoose, { Document, Schema } from "mongoose";



export interface Enc extends Document{
      content:string,
      encryption:string,
      password:string
}

const encryptionSchema: Schema<Enc> = new mongoose.Schema({
      content:{
        type:String,
        required:true,
      },
      encryption:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      }
},{timestamps:true})



const encryptionModel = mongoose.models.Encryptions as mongoose.Model<Enc> || mongoose.model<Enc>('Encryptions',encryptionSchema);

export default encryptionModel;