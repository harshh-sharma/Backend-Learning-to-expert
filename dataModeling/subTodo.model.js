import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:[true,"content is required"]
    },
    complete:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export const SubTodo = mongoose.model("SubTodo",subTodoSchema);