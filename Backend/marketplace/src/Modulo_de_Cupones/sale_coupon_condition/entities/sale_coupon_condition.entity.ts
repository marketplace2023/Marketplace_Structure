import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_condition' })
export class SaleCouponConditionEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_condition

  constructor(data: Partial<SaleCouponConditionEntity>) {
    Object.assign(this, data);
  }
}
