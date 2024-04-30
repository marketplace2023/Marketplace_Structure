import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ir_act_server' })
export class IrActServerEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo ir_act_server

  constructor(data: Partial<IrActServerEntity>) {
    Object.assign(this, data);
  }
}
