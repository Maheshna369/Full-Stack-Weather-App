import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import mongoose, { mongo } from "mongoose";

const RegisterPost = async(req, res) => {
  const { Username, Password } = req.body;
  if(!Username || !Password){
    return res.status(400).json({ message: "Field is missing while registration."});
  }
  try{
  const existingUser= await userModel.findOne({Username});
  if(existingUser){
    console.log(`${Username} is already exists in the database.`);
    return res.status(400).json({ message: `User is already exists in the database: ${existingUser}`});
  }
  const hashPassword= await bcrypt.hash(Password, 10);
  const newUser= await userModel.create({ Username: Username, Password: hashPassword});
  console.log(`new user is being created and stored in the database: ${newUser}`);
  res.status(200).json({ message: `User is being created in the database.`});
}
catch(err){
    console.log(`Error while post requesting for registration is: ${err}`);
}
};
export default RegisterPost;