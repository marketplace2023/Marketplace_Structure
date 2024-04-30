import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_batch' })
export class SaleCouponBatchEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_batch

  constructor(data: Partial<SaleCouponBatchEntity>) {
    Object.assign(this, data);
  }
}
