import { Schema, model } from "mongoose";

const loginSchema = new Schema(
  {    
    correo: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true
    },
    name:{
      type:String,
      required:true
    }    
  },
  {
    timestamps: true,
  }
);

export default model('Login' ,loginSchema);