import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateLocationDto } from './create-location.dto';

import { Request } from 'express';
import axios from 'axios';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Req() request: Request){
    const xForwardedFor = request.headers['x-forwarded-for'];
    const xRealIP = request.headers['x-real-ip'];

    const ip = xForwardedFor || xRealIP || request.connection.remoteAddress;

    console.log(ip)
        const options = {
          method: 'GET',
          url: 'https://ip-lookup-by-api-ninjas.p.rapidapi.com/v1/iplookup',
          params: {
            address: ip
          },
          headers: {
            'X-RapidAPI-Key': 'a4ccb89803mshb5fde47f00b5e30p112d4ejsnd60456cd5a91',
            'X-RapidAPI-Host': 'ip-lookup-by-api-ninjas.p.rapidapi.com'
          }
        };
        try {
          const response = await axios.request(options);
          const res={"success":"1","positions":[{
            "idposition":"1",
            "description":"decription...",
            "city":response.data.city,
            "longitude":response.data.lon,
            "latitude":response.data.lat,
          }]}
          console.log(res);

            return res;
        } catch (error) {
            return { errorx: 'Could not fetch location'+error };
        }
  }
  @Post()
  async create(@Body() createLocationDto: CreateLocationDto) {
    console.log(this.appService.create(createLocationDto))
    return this.appService.create(createLocationDto);
  }
  @Get('locations')
  async  getAll(){
    return this.appService.findAll();
  }
}


