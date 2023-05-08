import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";

import { Agencia } from "./agencia";
import { Banco } from "./banco";
import { Conta } from "./conta";
import { Projeto } from "./projeto";

@Entity("conv_cc")
export class Contacorrente {
  @PrimaryColumn("int")
  codigo: number;

  @OneToOne(() => Banco)
  @JoinColumn({ name: "codbanco" })
  banco: Banco;

  @OneToOne(() => Agencia)
  @JoinColumn({ name: "codagencia" })
  agencia: Agencia;

  @OneToOne(() => Conta)
  @JoinColumn({ name: "codcc" })
  conta: Conta;

  @Column("int")
  deletado: number;

  @ManyToOne(() => Projeto, (projeto) => projeto.contas_corrente)
  @JoinColumn({ name: "numconv" })
  projeto: Projeto;

  @Column("int")
  principal: number;
}
