import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Projeto } from "./projeto";
import { Usuario } from "./usuario";

@Entity("conv_coordenador")
export class Coordenador {
  @PrimaryColumn("int")
  codigo: number;
  @Column("int")
  deletado: number;

  @OneToOne(() => Usuario)
  @JoinColumn({
    name: "codcoordenador",
  })
  usuario: Usuario;

  @ManyToOne(() => Projeto)
  @JoinColumn({ name: "numconv" })
  projeto: Projeto;

  @Column({ name: "ehCoordenadorGeral", type: "int" })
  tipoCoordenador: number;
}
