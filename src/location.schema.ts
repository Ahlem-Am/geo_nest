import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type LocationDocument = HydratedDocument<Location>;
@Schema()
export class Location {
 
  @Prop()
  description: string;

  @Prop()
  longitude: string;
  @Prop()
  latitude: string;
  
  static description: string;
  
}

export const LocationSchema = SchemaFactory.createForClass(Location);
