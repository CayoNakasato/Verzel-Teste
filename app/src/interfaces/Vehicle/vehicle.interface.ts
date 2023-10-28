export interface IVehicleContextData {
  createVehicle: (data: IVehicleCreate) => void;
  getVehicles: () => Promise<void>;
  deleteVehicle: (vehicleId: string) => Promise<void>;
  updateVehicle: (data: IVehicleCreate, vehicleId: string) => Promise<void>;
  vehicles: IVehicleCreate[]
}

export interface IVehicleCreate {
  id: string;
  name: string;
  brand: string;
  model: string;
  frontImg: string;
  userId: string;
  price: number;
}

export interface IVehicleUpdate {
  name?: string;
  brand?: string;
  model?: string;
  frontImg?: string;
  price?: number;
}

export interface CarsListProps {
  vehicles: IVehicleCreate[];
}

