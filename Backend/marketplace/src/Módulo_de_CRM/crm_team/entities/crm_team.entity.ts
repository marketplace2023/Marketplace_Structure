import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'crm_team' })
export class CrmTeamEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo crm_team

  constructor(data: Partial<CrmTeamEntity>) {
    Object.assign(this, data);
  }
}
