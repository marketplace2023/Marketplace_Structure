import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreatePurchaseOrderLineDto {

@Expose()
public id : number;

@Expose()
public order_id  : number;

@Expose()
public product_id  : number;

@Expose()
public quantity : number;

@Expose()
public price_unit  : number;

@Expose()
public subtotal  : number;


}
