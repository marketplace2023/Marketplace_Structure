import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class StockScrapDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<StockScrapDto>) {
    Object.assign(this, data);
  }
}
