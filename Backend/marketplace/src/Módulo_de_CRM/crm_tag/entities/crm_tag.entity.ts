import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'crm_tag' })
export class CrmTagEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo crm_tag

  constructor(data: Partial<CrmTagEntity>) {
    Object.assign(this, data);
  }
}
