import { Router } from "express";
import { addClient} from '../controllers/cliente.controllers';

const router = Router();

router.post("/add",addClient)

export default router;