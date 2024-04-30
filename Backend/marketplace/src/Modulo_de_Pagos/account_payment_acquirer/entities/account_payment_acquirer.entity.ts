import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'account_payment_acquirer' })
export class AccountPaymentAcquirerEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'provider', type: 'varchar' })
  public provider: string;

  // Agrega más columnas según sea necesario para el modelo account_payment_acquirer

  constructor(data: Partial<AccountPaymentAcquirerEntity>) {
    Object.assign(this, data);
  }
}
