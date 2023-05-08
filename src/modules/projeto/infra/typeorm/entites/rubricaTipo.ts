import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("rubrica")
export class RubricaTipo {
  @PrimaryColumn("int")
  codigo: number;
  @Column("varchar")
  descricao: string;
  @Column("varchar")
  rubrica: string;
}
