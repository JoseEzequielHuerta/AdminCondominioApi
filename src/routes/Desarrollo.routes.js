import { Router } from "express";
import {
    getById,
    getDesarrollosActive,
    getDesarrollosInactive,
    getDesarrollos,
    addDesarrollo,
    updateDesarrollo,
    activeDesarrollo,
    inactiveDesarrollo,
    getDesarrollosByIdClient,
    getDessarrollosByIdClientActive,
    getDessarrollosByIdClientInactive,
} from "../controllers/desarrollo.contollers.js";

const router = Router();

router
  .get("/get",getDesarrollos)
  .get("/get/id=:id",getById)
  .get("/get/active",getDesarrollosActive)
  .get("/get/inactive",getDesarrollosInactive)
  .get("/getDesarrollosByIdClient=:id",getDesarrollosByIdClient)
  .get("/getDesarrollosByIdClientActive=:id",getDessarrollosByIdClientActive)
  .get("/getDesarrollosByIdClientInactive=:id",getDessarrollosByIdClientInactive)
  .post("/add",addDesarrollo)
  .post("/update=:id",updateDesarrollo)
  .post("/activeDesarrollo=:id",activeDesarrollo)
  .post("/inactiveDesarrollo=:id",inactiveDesarrollo)

export default router;
  