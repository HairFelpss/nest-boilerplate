import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataService } from './data.service';
import { ExternalData as ExternalDataModel } from '@prisma/client';
import { CreateDatumDto } from './dto/create-data.dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  create(@Body() createData: CreateDatumDto): Promise<ExternalDataModel> {
    return this.dataService.create(createData);
  }

  @Get()
  findAll(): Promise<ExternalDataModel[]> {
    return this.dataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ExternalDataModel> {
    return this.dataService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: any,
    @Body() updateDatumDto: ExternalDataModel,
  ): Promise<ExternalDataModel> {
    return this.dataService.update({
      id,
      data: updateDatumDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataService.remove({ id });
  }
}
