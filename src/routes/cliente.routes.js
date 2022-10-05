import { Router } from "express";
import {
  getById,
  getClientsActive,
  getClientsInactive,
  getClients,
  addClient,
  updateClient,
  activeClient,
  inactiveClient
} from "../controllers/cliente.controllers";

const router = Router();

router
  .get("/get", getClients)
  .get("/get/id=:id", getById)
  .get("/get/active", getClientsActive)
  .get("/get/inactive", getClientsInactive)
  .post("/add", addClient)
  .post("/update=:id", updateClient)
  .post("/activeClient=:id",activeClient)
  .post("/inactiveClient=:id",inactiveClient);

export default router;
