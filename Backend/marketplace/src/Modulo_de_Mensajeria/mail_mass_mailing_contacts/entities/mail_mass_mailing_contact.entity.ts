import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mail_mass_mailing_contacts' })
export class MailMassMailingContactsEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'mass_mailing_id', type: 'int' })
  public mass_mailing_id: number;

  @Column({ name: 'contact_id', type: 'int' })
  public contact_id: number;

  // Agrega más columnas según sea necesario para el modelo mail_mass_mailing_contacts

  constructor(data: Partial<MailMassMailingContactsEntity>) {
    Object.assign(this, data);
  }
}
