import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_rule' })
export class SaleCouponRuleEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_rule

  constructor(data: Partial<SaleCouponRuleEntity>) {
    Object.assign(this, data);
  }
}
