import { Model, Schema, model } from "mongoose";
import { IUserMethods, Iuser, UserModels } from "./user.interface";
// import userModel from './user.model';


   // Create a new Model type that knows about IUserMethods...
  //  type modelsUser = Model<Iuser, {}, IUserMethods>;

// create schema using interface
 const userSchema = new Schema<Iuser, UserModels, IUserMethods>({
    id:{type:String, required:true},
    name: { 
      firstName:{ type:String, required:true },
      middleName:{ type:String, required:true },
      lastName:{ type:String, required:true }
    },
    role:{type:String, required:true},
    password:{type:String, required:true},
    dateOfBirth:{type:String, required:true},
    gender:{type:String, enum:["male","female"]},
    email:{type:String, required:true},
    contactNo:{type:String, required:true},
    emergencyContactNo:{type:String, required:true},
    presentAddress:{type:String, required:true},
    permanentAddress:{type:String, required:true}
  });

  userSchema.static("getAdminUser", async function getAdminUsers(){
      const admins:any = await this.find({role: "admin"});
      return admins;
  })

  userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
  // create Model
   const userModel = model<Iuser, UserModels>("User", userSchema);


   export default userModel;
   
  