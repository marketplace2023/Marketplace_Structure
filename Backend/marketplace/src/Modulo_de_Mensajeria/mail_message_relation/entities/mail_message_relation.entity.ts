import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mail_message_relation' })
export class MailMessageRelationEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'message_id', type: 'int' })
  public message_id: number;

  @Column({ name: 'relation_id', type: 'int' })
  public relation_id: number;

  // Agrega más columnas según sea necesario para el modelo mail_message_relation

  constructor(data: Partial<MailMessageRelationEntity>) {
    Object.assign(this, data);
  }
}
