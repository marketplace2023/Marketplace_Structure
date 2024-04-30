import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'delivery_grid' })
export class DeliveryGridEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo delivery_grid

  constructor(data: Partial<DeliveryGridEntity>) {
    Object.assign(this, data);
  }
}
