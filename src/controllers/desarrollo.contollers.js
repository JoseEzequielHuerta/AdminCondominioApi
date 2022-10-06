import Desarrollo from "../models/Desarrollo.js";

exports.getById = async (req,res) => {
  const { id } = req.params;
  await Desarrollo.findById(id)
  .then((data) => res.status(200).json(data))
  .catch((err) => res.status(501).json(err));
}

exports.getDesarrollosActive = async (_, res) => {
    const desarrollos = await Desarrollo.find({done: { $eq:1 }})
    res.send(desarrollos)
}

exports.getDesarrollosInactive = async (_, res) => {
    const desarrollos = await Desarrollo.find({ done: { $gt: 1 } }).sort({done:1});
    res.send(desarrollos);
}

exports.getDesarrollos = async (_, res) => {
    const desarrollos = await Desarrollo.find();
    res.send(desarrollos)
}

exports.addDesarrollo = async (req, res) => {
    const desarrollo = Desarrollo(req.body);
    await desarrollo
        .save(desarrollo)
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(501).json(err));
}

exports.updateDesarrollo = async (res,req) => {
    const { id } = req.params;
    const desarrollo = req.body;
    await Desarrollo.findByIdAndUpdate(id,desarrollo)
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(501).json(err));
}

exports.activeDesarrollo = async (req,res) => {
    const { id } = req.params;
    const desarrollo = await Desarrollo.findById(id);
    desarrollo.done = 1;
    await desarrollo
      .save()
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(501).json(err));
}

exports.inactiveDesarrollo = async (req,res) => {
    const { id } = req.params;
    const desarrollo = await Desarrollo.findById(id);
    desarrollo.done = 2;
    await desarrollo
      .save()
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(501).json(err));
}

exports.getDesarrollosByIdClient = async(req,res) => {
    const { id } = req.params;
    const desarrollos = Desarrollo.find({idClient:`${id}`})
    res.send(desarrollos)
}

exports.getDessarrollosByIdClientActive = async(req,res) => {
    const { id } = req.params;
    const desarrollos = Desarrollo.find({idClient:`${id}`,done:{ $eq: 1 }})
    res.send(desarrollos)
}

exports.getDessarrollosByIdClientInactive = async(req,res) => {
    const { id } = req.params;
    const desarrollos = Desarrollo.find({idClient:`${id}`,done:{ $gt: 1 }})
    res.send(desarrollos)
}