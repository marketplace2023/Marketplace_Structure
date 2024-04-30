import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'stock_move_line' })
export class StockMoveLineEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo stock_move_line

  constructor(data: Partial<StockMoveLineEntity>) {
    Object.assign(this, data);
  }
}
