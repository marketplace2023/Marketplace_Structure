import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class IrModelDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<IrModelDto>) {
    Object.assign(this, data);
  }
}
