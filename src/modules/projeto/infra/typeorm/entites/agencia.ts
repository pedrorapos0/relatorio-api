import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("AGENCIA")
export class Agencia {
  @PrimaryColumn("int")
  codigo: number;

  @Column({ name: "NUMAGENCIA", type: "varchar" })
  agencia: string;

  @Column("int")
  deletado: number;

  @Column("int")
  digito: number;
}
