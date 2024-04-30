import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MailChannelPartnerDto {
  @Expose()
  public id: number;

  @Expose()
  public channel_id: number;

  @Expose()
  public partner_id: number;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<MailChannelPartnerDto>) {
    Object.assign(this, data);
  }
}
