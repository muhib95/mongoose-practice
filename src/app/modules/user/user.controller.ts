import { User } from "./user.model";
import express, { NextFunction, Request, Response } from "express"
import { createUserDb } from "./user.service";
export const createUser=(req:Request,res:Response,next:NextFunction)=>{
    createUserDb();

}
  