import { Projeto } from "@modules/projeto/infra/typeorm/entites/projeto";
import { IProjetoRepository } from "@modules/projeto/repositories/IProjetoRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetByCodigoProjetoUseCase {
  constructor(
    @inject("ProjetoRepository") private projetoRepository: IProjetoRepository
  ) {
    this.projetoRepository = projetoRepository;
  }

  public async execute(numero: number): Promise<Projeto | null> {
    const projeto = await this.projetoRepository.getByCodProjeto(numero);

    return projeto;
  }
}
