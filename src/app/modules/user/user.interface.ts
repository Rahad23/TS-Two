import { HydratedDocument, Model } from "mongoose";
import userModel from './user.model';

  // create a interface
   export interface Iuser{
        id: string;
        role: "student";
        password: string;
        name: {
          firstName: string;
          middleName: string;
          lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
      }

// static
// export interface userModel extends Model<Iuser>{
//     getAdminUser():Iuser[];
// }

// instance method
export interface IUserMethods {
  fullName(): string;
}


export interface UserModels extends Model<Iuser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<Iuser, IUserMethods>>;
}