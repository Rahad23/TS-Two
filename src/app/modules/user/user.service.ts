import { Iuser } from "./user.interface";
import userModel from "./user.model";

 const createUserToDB = async(payload:Iuser):Promise<Iuser>=>{
    const user = await new userModel(payload);
    await user.save(); // custom instance method
    console.log(user.fullName()) //build in instance method
    return user;
  }

  const getUserFromDB= async()=>{
    const users = await userModel.find({});
    return users;
  }

  const getUserIdFromDB=async(payload:string | null):Promise<Iuser | null>=>{
    const users = await userModel.findOne({id:payload}, {name:1, contactNo:1});
    return users;
  }

  const getAdminFromDB=async()=>{
    const getAdmin = await userModel.getAdminUsers()
    return getAdmin;
  }


export {
  createUserToDB,
  getUserFromDB,
  getUserIdFromDB,
  getAdminFromDB
}


