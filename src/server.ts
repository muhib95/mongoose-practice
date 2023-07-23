
import mongoose from "mongoose";
import app from "./app";

const port:number = 5000



async function dbConnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practicemongoose');
console.log("db connected");

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
        
    } catch (error) {
        console.log(error);
    }
  

    
}
dbConnect();



