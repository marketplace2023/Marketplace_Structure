import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_reward' })
export class SaleCouponRewardEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_reward

  constructor(data: Partial<SaleCouponRewardEntity>) {
    Object.assign(this, data);
  }
}
