import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'stock_production_lot' })
export class StockProductionLotEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo stock_production_lot

  constructor(data: Partial<StockProductionLotEntity>) {
    Object.assign(this, data);
  }
}
