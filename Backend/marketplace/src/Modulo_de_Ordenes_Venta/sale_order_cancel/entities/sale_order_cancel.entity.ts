import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_order_cancel' })
export class SaleOrderCancelEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_order_cancel

  constructor(data: Partial<SaleOrderCancelEntity>) {
    Object.assign(this, data);
  }
}
