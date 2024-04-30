import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_history' })
export class SaleCouponHistoryEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_history

  constructor(data: Partial<SaleCouponHistoryEntity>) {
    Object.assign(this, data);
  }
}
