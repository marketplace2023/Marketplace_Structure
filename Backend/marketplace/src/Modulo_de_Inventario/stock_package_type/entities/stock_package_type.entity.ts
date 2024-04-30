import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'stock_package_type' })
export class StockPackageTypeEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo stock_package_type

  constructor(data: Partial<StockPackageTypeEntity>) {
    Object.assign(this, data);
  }
}
