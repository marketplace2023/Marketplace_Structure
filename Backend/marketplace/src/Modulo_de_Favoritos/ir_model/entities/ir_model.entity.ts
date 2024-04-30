import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ir_model' })
export class IrModelEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo ir_model

  constructor(data: Partial<IrModelEntity>) {
    Object.assign(this, data);
  }
}
