import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class StockMoveLineDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<StockMoveLineDto>) {
    Object.assign(this, data);
  }
}
