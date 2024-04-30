import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ProductUomDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public category_id: number;

  // Puedes incluir más propiedades según sea necesario para el DTO

  constructor(data: Partial<ProductUomDto>) {
    Object.assign(this, data);
  }
}
