import { IsString } from "class-validator";


export class CreateLocationDto {

    @IsString()
    latitude:string
    
    @IsString()
    longitude:string;

    @IsString()
    description:string;

    

}