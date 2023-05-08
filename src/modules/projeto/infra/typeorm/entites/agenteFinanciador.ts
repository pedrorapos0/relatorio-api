import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("agentefinanciador")
export class AgenteFinanciador {
  @PrimaryColumn("int")
  codigo: number;
  @Column("varchar")
  descricao: string;
  @Column("int")
  deletado: number;
}
