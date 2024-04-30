import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MailMessageRelationDto {
  @Expose()
  public id: number;

  @Expose()
  public message_id: number;

  @Expose()
  public relation_id: number;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<MailMessageRelationDto>) {
    Object.assign(this, data);
  }
}
