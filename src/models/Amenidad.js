import { Schema, model } from "mongoose";

const amenidadSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    tipo:{
        type:Number,
        required:true
    },
    nAmenidades:{
        type:Number,
        required:true
    },
    idClient: {
      type: String,
      required:true
    },
    idDesarrollo: {
        type: String,
        required:true
      },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Amenidad", amenidadSchema);