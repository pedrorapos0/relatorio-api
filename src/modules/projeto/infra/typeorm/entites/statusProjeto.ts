import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("situacaoProjeto")
export class StatusProjeto {
  @PrimaryColumn("int")
  codigo: number;
  @Column("varchar")
  descricao: string;
  @Column("int")
  deletado: number;
}
