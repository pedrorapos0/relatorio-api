import { Router } from "express";
import { GetProjetoUseCaseController } from "@modules/projeto/useCases/getProjetoUseCase/GetProjetoUseCaseController";
import { GetByCodigoProjetoUseCaseController } from "@modules/projeto/useCases/getProjetoUseCase/GetByCodigoProjetoUseCaseController";

export const projetoRoutes = Router();
const getProjetoUseCaseController = new GetProjetoUseCaseController();
const getByCodigoProjetoUseCaseController =
  new GetByCodigoProjetoUseCaseController();

projetoRoutes.get("/", getProjetoUseCaseController.handler);

projetoRoutes.get("/:numero", getByCodigoProjetoUseCaseController.handler);
