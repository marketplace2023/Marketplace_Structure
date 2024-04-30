import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product_uom' })
export class ProductUomEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  // Agrega más columnas según sea necesario para el modelo product_uom

  constructor(data: Partial<ProductUomEntity>) {
    Object.assign(this, data);
  }
}
