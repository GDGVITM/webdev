import mongoose from "mongoose";

export async function  dbConnect (url,port) {

    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(
            ()=>{
                `server listening at ${port}`
            }
        );
        console.log("Database connected successfully");
    }catch(err){
        console.error(err);
        throw err;
    }
}