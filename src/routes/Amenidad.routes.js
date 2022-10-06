import { Router } from "express";
import {
    getById,
    updateAmenidad,
    deleteAmenidad
} from "../controllers/amenidad.controllers";

const router = Router()

router
  .get("/getById=:id",getById)
  .post("/updateAmenidad=:id",updateAmenidad)
  .post("/deleteAmenidad=:id",deleteAmenidad)

export default router;