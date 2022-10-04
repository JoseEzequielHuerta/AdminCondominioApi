import Cliente from "../models/Cliente";

exports.addClient = async (req,res) => {
    const cliente = Cliente(req.body);
    await cliente
      .save(cliente)
      .then((data)=> res.status(201).json(data))
      .catch((err)=> res.status(501).json(err))
}