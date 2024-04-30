import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_validation' })
export class SaleCouponValidationEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_validation

  constructor(data: Partial<SaleCouponValidationEntity>) {
    Object.assign(this, data);
  }
}
