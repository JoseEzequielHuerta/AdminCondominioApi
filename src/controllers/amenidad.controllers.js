import Amenidad from "../models/Amenidad.js";

exports.getById = async (req,res) => {
    const { id } = req.params
    const params = id.split(",")
    const idClient = params[0]
    const idDesarrollo = params[1]
    const amenidades = await Amenidad.find({idClient:`${idClient}`,idDesarrollo:`${idDesarrollo}`});
    res.send(amenidades)
}

exports.updateAmenidad = async(req,res) => {
    const { id } = req.params;
    const amenidad = req.body;
    await Amenidad.findByIdAndUpdate(id,amenidad)
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(501).json(err));
}

exports.deleteAmenidad = async(req,res) => {
    const { id } = req.params;
    await Amenidad.findByIdAndDelete(id)
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(501).json(err));
}