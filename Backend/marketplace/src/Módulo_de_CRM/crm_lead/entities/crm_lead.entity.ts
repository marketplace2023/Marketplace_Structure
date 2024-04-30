import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'crm_lead' })
export class CrmLeadEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo crm_lead

  constructor(data: Partial<CrmLeadEntity>) {
    Object.assign(this, data);
  }
}
