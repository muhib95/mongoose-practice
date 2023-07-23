import { User } from "./user.model";

export const createUserDb=async()=>{
    const user = new User({
      id:"011111",
      role:"student",
      password:"123",
      name:{
        firstName:"Muhibbul",
        lastName:"Hasan"
      },
      dateOfBirth:"31/12/1996",
      gender:"Male",
      email:"muhibbulhasan6@gmail.com",
      contactNo:"01749958965",
      emergencyContactNo:"01711111111",
      presentAddress:"Aftabnagor",
      permanentAddress:"Mymensingh"
      
      });
      await user.save();
      console.log(user);
  }