import { Schema, model } from "mongoose";

const desarrolloSchema = new Schema(
  {
    nombre:{
      type:String,
      required: true,
    },
    tipo:{
      type:Number,
      required: true
    },
    clase:{
      type:Number,
      required: true
    },
    nPropiedaes:{
      type:Number,
      required:true
    },
    nUnidades:{
      type:Number,
      required:true
    },
    cMatenimiento:{
      type:Number,
      required:true
    },
    calle:{
      type:String,
      required:true
    },
    nExterior: {
      type: String,
      required: true,
    },
      nInterior: {
      type: String,
      default: "s/n",
    },
    pais: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
    cp: {
      type: Number,
      required: true,
    },
    ciudad: {
      type:String,
      required:true
    },
    colonia: {
      type: String,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
    done:{
      type:Number,
      default:2
    },
    idClient:{
      type:String,
      required: true,
    }
    },
    {
      timestamps: true,
      versionKey: false,
    }
);

export default model('Desarrollo',desarrolloSchema);