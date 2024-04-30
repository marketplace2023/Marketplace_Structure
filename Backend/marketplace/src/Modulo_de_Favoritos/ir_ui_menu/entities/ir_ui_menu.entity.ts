import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ir_ui_menu' })
export class IrUiMenuEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo ir_ui_menu

  constructor(data: Partial<IrUiMenuEntity>) {
    Object.assign(this, data);
  }
}
