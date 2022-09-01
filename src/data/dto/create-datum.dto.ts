export class CreateDatumDto {
  rig_name: string;
  system: string;
  variable: [
    {
      timestamp: number; // miliseconds
      name: string;
      value: string;
      uom: string;
    },
  ];
}
