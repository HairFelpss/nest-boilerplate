import { Prisma } from '@prisma/client';

export class CreateDatumDto {
  rig_name: string;
  system: string;
  variable: Prisma.VariableCreateNestedOneWithoutExternalDataInput;
}
