import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'delivery_carrier_service' })
export class DeliveryCarrierServiceEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  // Agrega más columnas según sea necesario para el modelo delivery_carrier_service

  constructor(data: Partial<DeliveryCarrierServiceEntity>) {
    Object.assign(this, data);
  }
}
