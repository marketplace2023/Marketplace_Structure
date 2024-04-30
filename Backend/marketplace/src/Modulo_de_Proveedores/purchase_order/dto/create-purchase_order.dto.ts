import { Exclude, Expose } from "class-transformer";


@Exclude()
export class CreatePurchaseOrderDto {

    @Expose()
    public id : number;
    
    @Expose()
    public name : number;
    
    @Expose()
    public res_partner_id : string;
    
    @Expose()
    public order_date  : number;
    
    @Expose()
    total_amount : number;

    @Expose()
    order_status : number    

}
