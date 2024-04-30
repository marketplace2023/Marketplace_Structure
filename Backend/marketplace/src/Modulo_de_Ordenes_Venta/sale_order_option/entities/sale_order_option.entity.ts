import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_order_option' })
export class SaleOrderOptionEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_order_option

  constructor(data: Partial<SaleOrderOptionEntity>) {
    Object.assign(this, data);
  }
}
