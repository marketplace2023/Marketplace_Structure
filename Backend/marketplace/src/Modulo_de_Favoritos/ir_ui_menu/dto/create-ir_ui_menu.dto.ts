import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class IrUiMenuDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<IrUiMenuDto>) {
    Object.assign(this, data);
  }
}
