import { Injectable } from '@nestjs/common';
import { ExternalData, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  async create(
    externalData: Prisma.ExternalDataCreateInput,
  ): Promise<ExternalData> {
    const externalDataResponse = await this.prisma.externalData.create({
      data: {
        rig_name: externalData.rig_name,
        system: externalData.system,
      },
    });
    console.log(`Created with id: ${externalDataResponse.id}`);
    console.log('external data => ', externalData);
    /*const variables = externalData.variable;
    for (const data of variables) {
      this.prisma.variable.create({
        data: {
          ...data,
          externalDataId: externalDataResponse.id,
        },
      });
    }*/

    return externalDataResponse;
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
