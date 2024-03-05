import mongoose from "mongoose";

const todoSchema = new mongoose.Model({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    complete:{
        type:Boolean,
        default:false
    },
    subTodos:[
        {
            type:mongoose.Schema.types.ObjectId,
            ref:"SubTodo"
        }
    ],
    createdBy:{
        type:mongoose.Schema.types.ObjectId,
        ref:"User"
    }
},{timestamps:true});