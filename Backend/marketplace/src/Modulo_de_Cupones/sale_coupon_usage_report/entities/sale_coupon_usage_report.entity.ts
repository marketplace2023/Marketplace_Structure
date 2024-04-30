import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_coupon_usage_report' })
export class SaleCouponUsageReportEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo sale_coupon_usage_report

  constructor(data: Partial<SaleCouponUsageReportEntity>) {
    Object.assign(this, data);
  }
}
