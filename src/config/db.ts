import mongoose, { mongo } from "mongoose";


   type connectionObject = {
    isConnected?:number
   }

  let connection:connectionObject = {};

export const connectDb = async() =>{

  console.log('db call is here!!',process.env.MONGOURI);

    if(connection.isConnected === 1){
        console.log("1. Db is Already Connected");
    }
if(!connection.isConnected){
  try{

    console.log('2. db is trying to connect!!')
    const db = await mongoose.connect(process.env.MONGOURI as string);
    console.log('3. after awai from db connect!!',db.connections[0].readyState);

    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections[0].readyState);
    console.log("db Connected Sucessfully!!")
  }catch(error){
      console.log("DB Connection Failed!!",error);
  }
}
  
      
}