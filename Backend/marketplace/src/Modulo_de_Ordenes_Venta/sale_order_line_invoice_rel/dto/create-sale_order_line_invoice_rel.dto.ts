import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SaleOrderLineInvoiceRelDto {
  @Expose()
  public id: number;

  @Expose()
  public sale_order_line_id: number;

  @Expose()
  public invoice_id: number;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<SaleOrderLineInvoiceRelDto>) {
    Object.assign(this, data);
  }
}
