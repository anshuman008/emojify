import mongoose, { mongo } from "mongoose";


   type connectionObject = {
    isConnected?:number
   }

  let connection:connectionObject = {};

export const connectDb = async() =>{

  console.log('db call is here!!',process.env.MONGO_URI);

    if(connection.isConnected === 1){
        console.log("Db is Already Connected");
    }
if(!connection.isConnected){
  try{
    const db = await mongoose.connect(process.env.MONGO_URI as string);
     
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections[0].readyState);
    console.log("db Connected Sucessfully!!")
  }catch(error){
      console.log("DB Connection Failed!!",error);
  }
}
  
      
}