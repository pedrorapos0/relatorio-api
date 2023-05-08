import { IProjetoRepository } from "@modules/projeto/repositories/IProjetoRepository";
import { Repository } from "typeorm";
import { Projeto } from "@modules/projeto/infra/typeorm/entites/projeto";
import { AppDataSource } from "@config/dataSource";

export class ProjetoRepository implements IProjetoRepository {
  private projetoRepository: Repository<Projeto>;

  constructor() {
    this.projetoRepository = AppDataSource.getRepository(Projeto);
  }

  public async getByCodProjeto(
    codigo_projeto: number
  ): Promise<Projeto | null> {
    const projeto = await this.projetoRepository
      .createQueryBuilder("projeto")
      .innerJoinAndSelect("projeto.status_projeto", "statusprojeto")
      .leftJoinAndSelect("projeto.agente_financiador", "agentefinanciador")
      .innerJoinAndSelect(
        "projeto.contas_corrente",
        "contas_corrente",
        "contas_corrente.deletado is null and contas_corrente.principal = :principal",
        { principal: 1 }
      )
      .innerJoinAndSelect("contas_corrente.banco", "banco")
      .innerJoinAndSelect("contas_corrente.conta", "conta")
      .innerJoinAndSelect("contas_corrente.agencia", "agencia")
      .innerJoinAndSelect(
        "projeto.coordenadores",
        "coordenadores",
        "coordenadores.deletado is null and coordenadores.tipoCoordenador = :tipoCoordenador",
        { tipoCoordenador: 1 }
      )
      .leftJoinAndSelect("coordenadores.usuario", "usuario")
      .select([
        "projeto.titulo",
        "projeto.numero",
        "projeto.numero_contrato",
        "projeto.objeto",
        "projeto.vigencia_inicial",
        "projeto.vigencia_final",
        "projeto.orcamento",
        "statusprojeto.descricao",
        "agentefinanciador.descricao",
        "contas_corrente",
        "banco.descricao",
        "agencia.agencia",
        "conta.conta",
      ])
      .where("projeto.deletado is null and projeto.numero = :numero", {
        numero: codigo_projeto,
      })
      .getOne();

    return projeto;
  }

  public async getProjetos(): Promise<Projeto[]> {
    const projetos = await this.projetoRepository
      .createQueryBuilder("projeto")
      .innerJoinAndSelect("projeto.status_projeto", "statusprojeto")
      .leftJoinAndSelect("projeto.agente_financiador", "agentefinanciador")
      .leftJoinAndSelect(
        "projeto.contas_corrente",
        "contas_corrente",
        "contas_corrente.deletado is null and contas_corrente.principal = :principal",
        { principal: 1 }
      )
      .innerJoinAndSelect("contas_corrente.banco", "banco")
      .innerJoinAndSelect("contas_corrente.conta", "conta")
      .innerJoinAndSelect("contas_corrente.agencia", "agencia")
      .innerJoinAndSelect(
        "projeto.coordenadores",
        "coordenadores",
        "coordenadores.deletado is null and coordenadores.tipoCoordenador = :tipoCoordenador",
        { tipoCoordenador: 1 }
      )
      .leftJoinAndSelect("coordenadores.usuario", "usuario")
      .select([
        "projeto.titulo",
        "projeto.numero",
        "projeto.numero_contrato",
        "projeto.objeto",
        "projeto.vigencia_inicial",
        "projeto.vigencia_final",
        "projeto.orcamento",
        "statusprojeto.descricao",
        "agentefinanciador.descricao",
        "coordenadores",
        "contas_corrente",
        "usuario.descricao",
        "banco.descricao",
        "agencia.agencia",
        "conta.conta",
      ])
      .where(
        "projeto.deletado is null and codsituacaoprojeto = :codSituacaoprojeto",
        { codSituacaoprojeto: 2 }
      )
      .getMany();

    return projetos;
  }
}
