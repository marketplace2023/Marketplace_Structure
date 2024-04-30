import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mail_channel_partner' })
export class MailChannelPartnerEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'channel_id', type: 'int' })
  public channel_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  // Agrega más columnas según sea necesario para el modelo mail_channel_partner

  constructor(data: Partial<MailChannelPartnerEntity>) {
    Object.assign(this, data);
  }
}
