import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sale_order_line_invoice_rel' })
export class SaleOrderLineInvoiceRelEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sale_order_line_id', type: 'int' })
  public sale_order_line_id: number;

  @Column({ name: 'invoice_id', type: 'int' })
  public invoice_id: number;

  // Agrega más columnas según sea necesario para el modelo sale_order_line_invoice_rel

  constructor(data: Partial<SaleOrderLineInvoiceRelEntity>) {
    Object.assign(this, data);
  }
}
