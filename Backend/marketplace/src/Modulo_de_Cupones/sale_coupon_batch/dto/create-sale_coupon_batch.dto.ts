import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SaleCouponBatchDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<SaleCouponBatchDto>) {
    Object.assign(this, data);
  }
}
