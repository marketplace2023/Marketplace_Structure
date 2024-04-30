import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'stock_location_route' })
export class StockLocationRouteEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo stock_location_route

  constructor(data: Partial<StockLocationRouteEntity>) {
    Object.assign(this, data);
  }
}
