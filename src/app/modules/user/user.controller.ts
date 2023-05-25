import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminFromDB, getUserFromDB, getUserIdFromDB } from "./user.service";

const createUser =  async(req:Request, res:Response, next:NextFunction) => {
    /*
      step1: interface;
      step2: schema;
      step3: Model;
      step4: Database Query
    */
   const data = req.body;
   const user = await createUserToDB(data);
   res.status(200).json({
    status: "succuss",
    data: user
   }) 
  }

  const getUsers =  async(req:Request, res:Response, next:NextFunction) => {

   const user = await getUserFromDB();
   res.status(200).json({
    status: "succuss",
    data: user
   }) 
  }
  const getUserId = async(req:Request, res:Response, next:NextFunction)=>{
    const {id} = req.params;
    const user = await getUserIdFromDB(id);
    res.status(200).json({
     status: "succuss",
     data: user
    });
  }
  const getAdmin = async(req:Request, res:Response, next:NextFunction)=>{
    const user = await getAdminFromDB();
    res.status(200).json({
     status: "succuss",
     data: user
    });
  }

export {
    createUser,
    getUsers,
    getUserId,
    getAdmin
}