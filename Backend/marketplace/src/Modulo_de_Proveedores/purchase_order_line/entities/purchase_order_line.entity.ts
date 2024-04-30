import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { PurchaseOrder } from 'src/Modulo_de_Proveedores/purchase_order/entities/purchase_order.entity';

@Entity({ name: 'purchase_order_line' })
export class PurchaseOrderLine {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Expose()
  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Expose()
  @Column({ name: 'quantity', type: 'int' })
  public quantity: number;

  @Expose()
  @Column({ name: 'price_unit', type: 'decimal', precision: 10, scale: 2 })
  public price_unit: number;

  @Expose()
  @Column({ name: 'subtotal', type: 'decimal', precision: 10, scale: 2 })
  public subtotal: number;

  @ManyToOne(() => PurchaseOrder, (purchaseOrder) => purchaseOrder.purchaseOrderLines)
  @JoinColumn({ name: 'order_id' })
  public purchaseOrder: PurchaseOrder;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<PurchaseOrderLine>) {
    Object.assign(this, data);
  }
}
