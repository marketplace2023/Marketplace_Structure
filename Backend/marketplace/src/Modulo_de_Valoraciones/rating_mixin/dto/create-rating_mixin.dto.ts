import { Exclude, Expose } from "class-transformer";

 @Exclude()
export class CreateRatingMixinDto {
@Expose()
public id : number;

@Expose()
public rating : number;

@Expose()
public review : string;

@Expose()
public review_count : string;


}