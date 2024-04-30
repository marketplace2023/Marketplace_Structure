import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'stock_scrap' })
export class StockScrapEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo stock_scrap

  constructor(data: Partial<StockScrapEntity>) {
    Object.assign(this, data);
  }
}
