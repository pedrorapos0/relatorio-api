import { Projeto } from "@modules/projeto/infra/typeorm/entites/projeto";

export interface IProjetoRepository {
  getProjetos(): Promise<Projeto[]>;
  getByCodProjeto(codigo_projeto: number): Promise<Projeto | null>;
}
