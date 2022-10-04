require("dotenv").config();

import bodyParser from "body-parser";
import express from 'express';
import clienteRoutes from "./routes/cliente.routes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/cliente",clienteRoutes)

export default app;