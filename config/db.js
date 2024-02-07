// const mongoose= require('mongoose')

// const connectDB = async()=>{
//     try{
// const conn = await mongoose.connect(process.env.MONGO_URI);
// console.log(`Connected to Mongodb database ${conn.connection.host}`);
//     }catch (error){
//         console.log(`Error in Mongodb ${error}`);
//     }
// };
// module.exports = connectDB;

import mongoose from "mongoose";

const connectDB = async()=>{
        try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Mongodb database ${conn.connection.host}`);
        }catch (error){
            console.log(`Error in Mongodb ${error}`);
        }
    };

export default connectDB;