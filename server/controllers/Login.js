import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
const loginPost = async (req, res) => {
  const { Username, Password } = req.body;
  if (!Username || !Password) {
    return res.status(400).json({ message: `Field is missing while login` });
  }
  try {
    const existingUser = await userModel.findOne({ Username });
    if (!existingUser) {
      console.log(`User is not exists in the database`);
      return res
        .status(400)
        .json({ message: `User is not exists in the database.` });
    }
    const hashPassword = existingUser.Password;
    const isPasswordCorrect = await bcrypt.compare(Password, hashPassword);
    if (isPasswordCorrect) {
      console.log(`The user info is: ${existingUser}`);
      res.status(200).json({ message: `Password is Correct.` });
    }
  } catch (err) {
    console.log(`Error while login in the backend is: ${err}`);
  }
};
export default loginPost;
