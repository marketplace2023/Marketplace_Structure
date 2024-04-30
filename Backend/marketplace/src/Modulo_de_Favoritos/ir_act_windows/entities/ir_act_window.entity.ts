import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ir_act_windows' })
export class IrActWindowsEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo ir_act_windows

  constructor(data: Partial<IrActWindowsEntity>) {
    Object.assign(this, data);
  }
}
