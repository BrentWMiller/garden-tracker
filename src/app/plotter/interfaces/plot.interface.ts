import { Box } from './box.interface';

export interface Plot {
  id?: string;
  title: string;
  description?: string;
  demensions: PlotDemensions;
  boxes?: Array<Box>;
}

export interface PlotDemensions {
  width: number;
  height: number;
}
