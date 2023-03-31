import express from "express";
import path from "path";

import dotenv from 'dotenv';
import { loadApiEndpoints } from "./controllers/api";

dotenv.config();
const app = express();

app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));

loadApiEndpoints(app);

export default app;
