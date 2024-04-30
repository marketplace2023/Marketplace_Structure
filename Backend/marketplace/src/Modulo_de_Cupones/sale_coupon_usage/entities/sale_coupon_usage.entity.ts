import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_usage' })
export class SaleCouponUsageEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_usage

  constructor(data: Partial<SaleCouponUsageEntity>) {
    Object.assign(this, data);
  }
}
