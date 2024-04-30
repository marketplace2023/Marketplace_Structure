import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SaleOrderDiscountDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public discount_amount: number;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<SaleOrderDiscountDto>) {
    Object.assign(this, data);
  }
}
