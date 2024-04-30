import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mail_message_subtype' })
export class MailMessageSubtypeEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo mail_message_subtype

  constructor(data: Partial<MailMessageSubtypeEntity>) {
    Object.assign(this, data);
  }
}
