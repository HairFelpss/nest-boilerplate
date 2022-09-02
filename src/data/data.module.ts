import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DataController],
  providers: [PrismaService, DataService],
})
export class DataModule {}
