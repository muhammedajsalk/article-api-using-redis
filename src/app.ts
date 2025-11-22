import express from "express";
import articleRoutes from "../src/app/articles/routes/article.route";
import {errorHandler} from "./middleware/errorHandler";
import logger from "./middleware/logger";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use("/api/articles", articleRoutes);

app.use(errorHandler);

export default app;
