import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'purchase_order' })
export class PurchaseOrder {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Expose()
  @Column({ name: 'res_partner_id', type: 'varchar' })
  public res_partner_id: string;

  @Expose()
  @Column({ name: 'order_date', type: 'timestamp' })
  public order_date: Date;

  @Expose()
  @Column({ name: 'total_amount', type: 'decimal', precision: 10, scale: 2 })
  public total_amount: number;

  @Expose()
  @Column({ name: 'order_status', type: 'int' })
  public order_status: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<PurchaseOrder>) {
    Object.assign(this, data);
  }
}
