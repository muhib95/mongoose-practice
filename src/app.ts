import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import { User } from "./app/modules/user/user.model";
import { router } from "./app/modules/user/user.route";
const app:Application = express()
// cors ploicy here...
app.use(cors());

// parse Data here...
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// user create Headers...
app.use('/createuser',router)





app.get('/', (req:Request, res:Response,next:NextFunction) => {
    res.send('Hello World!')
  })


  export default app;