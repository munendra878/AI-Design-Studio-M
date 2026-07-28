import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    clerkId:{
        type:String,
        required:true,
        unique:true
    },

    plan:{
        type:String,
        default:"Free"
    },

    // Daily Usage
    promptUsed:{
        type:Number,
        default:0
    },

    imageUsed:{
        type:Number,
        default:0
    },

    saveUsed:{
        type:Number,
        default:0
    },

    lastReset:{
        type:Date,
        default:Date.now
    },

    // Statistics
    totalDesigns:{
        type:Number,
        default:0
    },

    downloads:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
});

export default mongoose.model("User", userSchema);