import { Module } from '@nestjs/common';
import { DataModule } from './data/data.module';
import { DataService } from './data/data.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [DataService, PrismaService],
})
export class AppModule {}
