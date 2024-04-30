import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'account_bank_statement_import' })
export class AccountBankStatementImportEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo account_bank_statement_import

  constructor(data: Partial<AccountBankStatementImportEntity>) {
    Object.assign(this, data);
  }
}
