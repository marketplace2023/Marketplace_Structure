import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MailMessageSubtypeDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<MailMessageSubtypeDto>) {
    Object.assign(this, data);
  }
}
