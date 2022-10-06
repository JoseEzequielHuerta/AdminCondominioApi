import { Router } from "express";
import { nuevoUsuario,login  } from "../controllers/auth.controllers";

const router =Router();

router
    .post("/nuevoCliente",nuevoUsuario)
    .post("/login",login)



export default router;
