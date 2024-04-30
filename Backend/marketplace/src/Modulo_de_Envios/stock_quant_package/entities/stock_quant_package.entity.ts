import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'stock_quant_package' })
export class StockQuantPackageEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo stock_quant_package

  constructor(data: Partial<StockQuantPackageEntity>) {
    Object.assign(this, data);
  }
}
