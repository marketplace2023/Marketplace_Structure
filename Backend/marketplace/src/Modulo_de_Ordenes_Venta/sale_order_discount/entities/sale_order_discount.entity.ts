import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_order_discount' })
export class SaleOrderDiscountEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'discount_amount', type: 'decimal', precision: 10, scale: 2 })
  public discount_amount: number;

  // Agrega más columnas según sea necesario para el modelo sale_order_discount

  constructor(data: Partial<SaleOrderDiscountEntity>) {
    Object.assign(this, data);
  }
}
