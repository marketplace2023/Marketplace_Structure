import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_order_template_option' })
export class SaleOrderTemplateOptionEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_order_template_option

  constructor(data: Partial<SaleOrderTemplateOptionEntity>) {
    Object.assign(this, data);
  }
}
