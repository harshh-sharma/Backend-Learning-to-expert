import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"user name is required"],
        maxLength:[30,"user name not contain more then 30 words"],
        minLength:[5,"user name must be contain atleast 8 character"]
    },
    email:{
        type:String,
        required:[true,"email must be required"],
        true:true,
        unique:[true,"email must be unique"]
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"password must be contain atleast 8 character"],
        maxLength:[16,"password not contain more then 16 character"]
    }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);