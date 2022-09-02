import { CreateDatumVariable } from './create-datum-variable.dto';
export class CreateDatumDto {
  rig_name: string;
  system: string;
  variable: CreateDatumVariable[];
}
