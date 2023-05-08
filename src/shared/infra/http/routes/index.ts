import { Router } from "express";
import { projetoRoutes } from "@modules/projeto/infra/http/routes";

export const routes = Router();

routes.use("/projetos", projetoRoutes);
