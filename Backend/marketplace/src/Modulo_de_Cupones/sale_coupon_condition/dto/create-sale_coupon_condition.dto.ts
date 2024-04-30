import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SaleCouponConditionDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<SaleCouponConditionDto>) {
    Object.assign(this, data);
  }
}
