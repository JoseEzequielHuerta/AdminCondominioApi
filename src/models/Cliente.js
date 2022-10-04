import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    aPaterno: {
      type: String,
      required: true,
    },
    aMaterno: {
      type: String,
      default: "",
    },
    rol: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      default: -1,
    },
    correo: {
      type: String,
      default: "s/c",
    },
    preferencia: {
      type: Number,
      required: true,
    },
    nDesarrollos: {
      type: Number,
      required: true,
    },
    nPropiedades: {
      type: Number,
      required: true,
    },
    nUnidades: {
      type: Number,
      required: true,
    },
    calle: {
      type: String,
      required: true,
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
    colonia: {
      type: String,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
    done: {
      type: Number,
      default: 2,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Cliente", clienteSchema);
