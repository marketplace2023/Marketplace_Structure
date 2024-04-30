import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mail_mass_mailing' })
export class MailMassMailingEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo mail_mass_mailing

  constructor(data: Partial<MailMassMailingEntity>) {
    Object.assign(this, data);
  }
}
