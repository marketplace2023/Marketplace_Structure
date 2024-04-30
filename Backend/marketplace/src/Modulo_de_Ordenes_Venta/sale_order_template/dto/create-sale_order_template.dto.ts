import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SaleOrderTemplateDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<SaleOrderTemplateDto>) {
    Object.assign(this, data);
  }
}
