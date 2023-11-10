import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Location,LocationSchema } from './location.schema';

@Module({
  imports: [
  
    //CN6OQY2u7pGTBBxF
    //'mongodb+srv://ahlemam:YC2JDEEj5KtIeU4t@cluster0.zd4x5hp.mongodb.net/ahlem?retryWrites=true&w=majority&ssl=true'
   
    MongooseModule.forRoot(
      //'mongodb+srv://ahlemam:YC2JDEEj5KtIeU4t@cluster0.zd4x5hp.mongodb.net/ahlem?retryWrites=true&w=majority&ssl=true'
      'mongodb+srv://geo_user:CN6OQY2u7pGTBBxF@cluster0.zd4x5hp.mongodb.net/ahlem?retryWrites=true&w=majority&ssl=true'  
      // 'mongodb+srv://ahlem:BySXdwDlj2BPiW8q@cluster0.ywolfba.mongodb.net/?retryWrites=true&w=majority&ssl=true'

    ),

    MongooseModule.forFeature([{ name:Location.name, schema:LocationSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
