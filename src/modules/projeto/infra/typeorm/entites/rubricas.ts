import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Projeto } from "./projeto";
import { RubricaTipo } from "./rubricaTipo";

@Entity("conv_rubrica")
export class Rubrica {
  @PrimaryColumn("int")
  codigo: number;
  @Column("int")
  deletado: number;
  @OneToOne(() => RubricaTipo, { eager: true })
  @JoinColumn({ name: "codrubrica" })
  tipoRubrica: RubricaTipo;
  @ManyToOne(() => Projeto, (projeto) => projeto.rubricas)
  @JoinColumn({ name: "numconv" })
  projeto: Projeto;
}
