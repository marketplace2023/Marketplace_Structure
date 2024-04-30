import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AccountInvoiceTransactionRelDto {
  @Expose()
  public id: number;

  @Expose()
  public invoice_id: number;

  @Expose()
  public transaction_id: number;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<AccountInvoiceTransactionRelDto>) {
    Object.assign(this, data);
  }
}
