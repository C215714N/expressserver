import express from "express";
import { configDotenv } from "dotenv";
import selectionRouter from "./app/router/selectionRouter.js"
import { dbConn } from "./app/config/db.js";

configDotenv();
const {
    PORT = 3000,
    URI = 'mongodb://localhost:27017/test'
} = process.env;
const app = express();
dbConn(URI)

app.use(express.json());
app.use(express.urlencoded());
app.use("/selection", selectionRouter);
app.use(express.static('public'));
app.listen(PORT, () => console.log(`service running on port ${PORT}`));