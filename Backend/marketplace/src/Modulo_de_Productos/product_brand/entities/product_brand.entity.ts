import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product_brand' })
export class ProductBrandEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  public description: string;

  // Agrega más columnas según sea necesario para el modelo product_brand

  constructor(data: Partial<ProductBrandEntity>) {
    Object.assign(this, data);
  }
}
