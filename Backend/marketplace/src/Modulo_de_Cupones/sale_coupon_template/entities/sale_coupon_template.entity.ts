import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_template' })
export class SaleCouponTemplateEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_template

  constructor(data: Partial<SaleCouponTemplateEntity>) {
    Object.assign(this, data);
  }
}
