import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SaleCouponProgramDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<SaleCouponProgramDto>) {
    Object.assign(this, data);
  }
}
