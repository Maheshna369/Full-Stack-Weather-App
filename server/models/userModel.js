import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    Username:{
        required: true,
        type: String,
        unique: true
    },
    Password: {
        required: true,
        type: String
    }
})
const userModel= mongoose.model("users", userSchema);
export default userModel;