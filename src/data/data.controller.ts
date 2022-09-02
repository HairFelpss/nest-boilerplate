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
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { ExternalData as ExternalDataModel } from '@prisma/client';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  create(@Body() createDatumDto: CreateDatumDto): Promise<ExternalDataModel> {
    return this.dataService.create(createDatumDto);
  }

  @Get()
  findAll(): Promise<ExternalDataModel[]> {
    return this.dataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ExternalDataModel> {
    return this.dataService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: any,
    @Body() updateDatumDto: UpdateDatumDto,
  ): Promise<ExternalDataModel> {
    return this.dataService.update({
      id,
      data: updateDatumDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.dataService.remove({ id });
  }
}
