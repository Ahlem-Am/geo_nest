import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location} from './location.schema';

import {CreateLocationDto} from './create-location.dto'
@Injectable()
export class AppService {

  constructor(@InjectModel(Location.name) private LocationModel: Model<Location>) {}
  getHello(): string {
    return 'Hello World!';
  }
  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const createdLocation = new this.LocationModel(createLocationDto);
    return createdLocation.save();
  }

  async findAll(): Promise<Location[]> {
    return this.LocationModel.find().exec();
  }
}
