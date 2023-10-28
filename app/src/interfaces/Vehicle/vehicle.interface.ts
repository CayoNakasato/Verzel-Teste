export interface IVehicleContextData {
  createVehicle: (data: IVehicleCreate) => void;
  getVehicles: () => Promise<void>;
  deleteVehicle: (vehicleId: string) => Promise<void>;
  updateVehicle: (data: IVehicleUpdate, vehicleId: string) => Promise<void>;
  vehicles: IVehicleCreate[];
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

export interface CarCardProps {
  car: IVehicleCreate;
}

export interface DeleteCarModalProps {
  id: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EditeModalProps {
  car: IVehicleCreate;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}