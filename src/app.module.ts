import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { HmkModule } from './module/app.module';

@Module({
  imports: [
    HmkModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot('mongodb://localhost:27017/pe_homekit')
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
