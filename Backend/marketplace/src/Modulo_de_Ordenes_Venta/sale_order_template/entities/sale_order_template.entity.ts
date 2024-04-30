import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_order_template' })
export class SaleOrderTemplateEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_order_template

  constructor(data: Partial<SaleOrderTemplateEntity>) {
    Object.assign(this, data);
  }
}
