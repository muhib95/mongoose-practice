  //create Interface Headers...
  export interface IUser{
    id:string;
    role:"student";
    password:string;
    name:{
      firstName:string,
      middleName?:string,
      lastName:string
    };
    dateOfBirth?:string;
    gender:"Male" | "Female";
    email?:string;
    contactNo:string;
    emergencyContactNo?:string;
    presentAddress:string;
    permanentAddress:string;
  }