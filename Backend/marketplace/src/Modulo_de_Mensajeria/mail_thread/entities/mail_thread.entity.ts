import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mail_thread' })
export class MailThreadEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo mail_thread

  constructor(data: Partial<MailThreadEntity>) {
    Object.assign(this, data);
  }
}
