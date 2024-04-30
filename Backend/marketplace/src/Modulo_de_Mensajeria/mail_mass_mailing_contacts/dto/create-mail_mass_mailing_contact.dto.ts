import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MailMassMailingContactsDto {
  @Expose()
  public id: number;

  @Expose()
  public mass_mailing_id: number;

  @Expose()
  public contact_id: number;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<MailMassMailingContactsDto>) {
    Object.assign(this, data);
  }
}
