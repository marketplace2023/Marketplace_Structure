import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'account_invoice_transaction_rel' })
export class AccountInvoiceTransactionRelEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'invoice_id', type: 'int' })
  public invoice_id: number;

  @Column({ name: 'transaction_id', type: 'int' })
  public transaction_id: number;

  // Agrega más columnas según sea necesario para el modelo account_invoice_transaction_rel

  constructor(data: Partial<AccountInvoiceTransactionRelEntity>) {
    Object.assign(this, data);
  }
}
