require("dotenv").config();

import cors from 'cors'
import bodyParser from "body-parser";
import express from 'express';
import clienteRoutes from "./routes/cliente.routes";
import desarrolloRoutes from "./routes/Desarrollo.routes";
import amenidadRoutes from "./routes/Amenidad.routes";
import loginRoutes from "./routes/auth.routes";
import morgan from "morgan";

const corsOptions ={
    origin:process.env.FRONTEND_POINT,
};

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/cliente",clienteRoutes);
app.use("/desarrolloRoutes",desarrolloRoutes);
app.use("/amenidad",amenidadRoutes);
app.use("/auth",loginRoutes)

export default app;