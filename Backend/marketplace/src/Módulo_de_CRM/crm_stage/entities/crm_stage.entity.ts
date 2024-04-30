import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'crm_stage' })
export class CrmStageEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo crm_stage

  constructor(data: Partial<CrmStageEntity>) {
    Object.assign(this, data);
  }
}
