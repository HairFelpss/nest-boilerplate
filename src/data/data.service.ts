import { Injectable } from '@nestjs/common';
import { ExternalData, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ExternalDataCreateInput): Promise<ExternalData> {
    return this.prisma.externalData.create({
      data,
    });
  }

  findAll(): Promise<ExternalData[]> {
    return this.prisma.externalData.findMany();
  }

  findOne(
    id: Prisma.ExternalDataWhereUniqueInput,
  ): Promise<ExternalData | null> {
    return this.prisma.externalData.findUnique({
      where: id,
    });
  }

  update(params: {
    id: Prisma.ExternalDataWhereUniqueInput;
    data: Prisma.ExternalDataUpdateInput;
  }): Promise<ExternalData> {
    const { data, id } = params;

    return this.prisma.externalData.update({
      data,
      where: id,
    });
  }

  remove(id: Prisma.ExternalDataWhereUniqueInput): Promise<ExternalData> {
    return this.prisma.externalData.delete({
      where: id,
    });
  }
}
