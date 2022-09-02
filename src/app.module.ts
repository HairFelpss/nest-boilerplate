import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { DataService } from './data/data.service';

@Module({
  imports: [DataModule],
  controllers: [AppController],
  providers: [AppService, DataService],
})
export class AppModule {}
