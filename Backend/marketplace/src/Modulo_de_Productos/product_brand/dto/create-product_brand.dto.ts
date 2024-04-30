import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ProductBrandDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  // Puedes incluir más propiedades según sea necesario para el DTO

  constructor(data: Partial<ProductBrandDto>) {
    Object.assign(this, data);
  }
}
