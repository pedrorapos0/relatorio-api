import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Banco")
export class Banco {
  @PrimaryColumn("int")
  codigo: number;

  @Column({ name: "NOMEBANCO", type: "varchar" })
  descricao: string;

  @Column("int")
  deletado: number;
}
