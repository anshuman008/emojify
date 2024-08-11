import mongoose, { mongo } from "mongoose";


   type connectionObject = {
    isConnected?:number
   }

  let connection:connectionObject = {};

export const connectDb = async() =>{

    if(connection.isConnected){
        console.log("Db is Already Connected");
        return;
    }

    try{
      const db = await mongoose.connect(process.env.MONGOURI as string);
       
      connection.isConnected = db.connections[0].readyState;
      console.log(db.connections[0].readyState);
      console.log("db Connected Sucessfully!!")
    }catch(error){
        console.log("DB Connection Failed!!",error);
    }
      
}