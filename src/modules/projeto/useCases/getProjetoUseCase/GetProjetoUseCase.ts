import { Projeto } from "@modules/projeto/infra/typeorm/entites/projeto";
import { IProjetoRepository } from "@modules/projeto/repositories/IProjetoRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetProjetoUseCase {
  constructor(
    @inject("ProjetoRepository") private projetoRepository: IProjetoRepository
  ) {
    this.projetoRepository = projetoRepository;
  }

  public async execute(): Promise<Projeto[]> {
    const projetos = await this.projetoRepository.getProjetos();
    return projetos;
  }
}
