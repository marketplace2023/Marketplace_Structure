import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SaleCouponHistoryDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<SaleCouponHistoryDto>) {
    Object.assign(this, data);
  }
}
