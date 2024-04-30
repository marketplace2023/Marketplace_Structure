import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'stock_pack_operation' })
export class StockPackOperationEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo stock_pack_operation

  constructor(data: Partial<StockPackOperationEntity>) {
    Object.assign(this, data);
  }
}
