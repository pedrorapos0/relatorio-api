import "reflect-metadata";
import express from "express";
import cors from "cors";
import "dotenv/config";

import "@shared/infra/typeorm";
import "@shared/container";
import { routes } from "@shared/infra/http/routes";

export const app = express();

app.use(cors());

app.use(express.json());

app.use("/", routes);
