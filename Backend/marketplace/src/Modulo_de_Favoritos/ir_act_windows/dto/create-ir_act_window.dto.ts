import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class IrActWindowsDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<IrActWindowsDto>) {
    Object.assign(this, data);
  }
}
