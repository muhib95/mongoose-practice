import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express()
const port = 5000


app.use(cors());
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

