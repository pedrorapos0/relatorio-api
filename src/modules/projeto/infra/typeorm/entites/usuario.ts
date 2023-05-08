import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Coordenador } from "./coordenador";

@Entity("pessoas")
export class Usuario {
  @PrimaryColumn("int")
  codigo: number;
  @Column("varchar")
  descricao: string;
  @Column("int")
  deletado: number;
}
