import { container } from "tsyringe";

import { IProjetoRepository } from "@modules/projeto/repositories/IProjetoRepository";
import { ProjetoRepository } from "@modules/projeto/infra/typeorm/repositories/ProjetoRepository";

container.registerSingleton<IProjetoRepository>(
  "ProjetoRepository",
  ProjetoRepository
);

export default container;
