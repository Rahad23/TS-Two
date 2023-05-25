import mongoose from "mongoose";
import app from "./app";
const port:number = 5005;
// data base connections
main().catch(err => console.log(err));


async function main() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
   console.log("Database connection successfully")

   app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })

  }catch(err){
    console.log("Field to database connection", err);
  }
}

