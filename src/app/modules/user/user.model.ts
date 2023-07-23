import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema=new Schema<IUser>({
    id:{type:String,required:true,unique:true},
    role:{type:String},
    password:{type:String,required:true},
    name:{
      firstName:{type:String,required:true},
      middleName:{type:String},
      lastName:{type:String,required:true}
    },
    dateOfBirth:{type:String},
    gender:{type:String,required:true,enum:["Male","Female"]},
    email:{type:String},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String},
    presentAddress:{type:String,required:true},
    permanentAddress:{type:String,required:true}

  })

  export const User=model<IUser>('User',userSchema);