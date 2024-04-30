import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AccountPaymentAcquirerDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public provider: string;

  // Agrega más propiedades según sea necesario para el DTO

  constructor(data: Partial<AccountPaymentAcquirerDto>) {
    Object.assign(this, data);
  }
}
