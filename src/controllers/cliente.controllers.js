import Cliente from "../models/Cliente.js";

exports.getById = async (req, res) => {
  const { id } = req.params;
  await Cliente.findById(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(501).json(err));
};

exports.getClientsActive = async (_, res) => {
  const clientes = await Cliente.find({ done: { $eq: 1 } });
  res.send(clientes);
};

exports.getClientsInactive = async (_, res) => {
  const clientes = await Cliente.find({ done: { $gt: 1 } });
  res.send(clientes);
};

exports.getClients = async (_, res) => {
  const clientes = await Cliente.find();
  res.send(clientes);
};

exports.addClient = async (req, res) => {
  const cliente = Cliente(req.body);
  await cliente
    .save(cliente)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(501).json(err));
};

exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const cliente = req.body;
  await Cliente.findByIdAndUpdate(id, cliente)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(501).json(err));
};

exports.activeClient = async (req, res) => {
  const { id } = req.params;
  const cliente = await Cliente.findById(id);
  cliente.done = 1;
  await cliente
    .save()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(501).json(err));
};

exports.inactiveClient = async (req, res) => {
  const { id } = req.params;
  const cliente = await Cliente.findById(id);
  cliente.done = 3;
  await cliente
    .save()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(501).json(err));
};
