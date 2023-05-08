import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("CC")
export class Conta {
  @PrimaryColumn("int")
  codigo: number;

  @Column({ name: "cc", type: "varchar" })
  conta: string;

  @Column("int")
  deletado: number;
}
