import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { StatusProjeto } from "@modules/projeto/infra/typeorm/entites/statusProjeto";
import { Rubrica } from "@modules/projeto/infra/typeorm/entites/rubricas";
import { AgenteFinanciador } from "@modules/projeto/infra/typeorm/entites/agenteFinanciador";
import { Coordenador } from "./coordenador";
import { Contacorrente } from "./contacorrente";

@Entity("convenio")
export class Projeto {
  @PrimaryColumn({ name: "numconv", type: "int" })
  codigo: number;
  @Column({ name: "titulo", type: "varchar" })
  titulo: string;
  @Column({ name: "regnum", type: "int" })
  numero: number;
  @Column({ name: "numContrato", type: "varchar" })
  numero_contrato: string;
  @Column({ name: "objeto", type: "varchar" })
  objeto: string;
  @Column({ name: "dtvigenciainicial", type: "datetime" })
  vigencia_inicial: Date;
  @Column({ name: "dtVigCalc2", type: "datetime" })
  vigencia_final: Date;

  @Column({ name: "orcamento", type: "int" })
  orcamento: number;

  @Column({ name: "deletado", type: "int" })
  deletado: number;

  @Column({ name: "codsituacaoprojeto", type: "int" })
  codigo_status_projeto: number;

  @OneToOne(() => StatusProjeto)
  @JoinColumn({ name: "codsituacaoprojeto" })
  status_projeto: StatusProjeto;

  @OneToMany(() => Rubrica, (rubrica) => rubrica.projeto)
  rubricas: Rubrica[];

  @OneToOne(() => AgenteFinanciador)
  @JoinColumn({ name: "codAgenteFinanc" })
  agente_financiador: AgenteFinanciador;

  @OneToMany(() => Contacorrente, (contacorrente) => contacorrente.projeto)
  contas_corrente: Contacorrente[];

  @OneToMany(() => Coordenador, (coordenador) => coordenador.projeto)
  @JoinColumn({ name: "numconv" })
  coordenadores: Coordenador[];
}
