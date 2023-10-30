export interface IVehicleContextData {
  createVehicle: (data: IVehicleCreate) => void;
  getVehicles: (orderBy: "desc" | "asc") => Promise<void>;
  getVehiclesPerPage: (
    currentPage: number,
    orderBy: "asc" | "desc"
  ) => Promise<void>;
  deleteVehicle: (vehicleId: string) => Promise<void>;
  updateVehicle: (data: IVehicleUpdate, vehicleId: string) => Promise<void>;
  vehicles: IVehicleCreate[];
  vehiclesPagination: IVehiclePagination;
  setVehiclesPagination: React.Dispatch<
    React.SetStateAction<IVehiclePagination>
  >;
}

export interface IVehiclePagination {
  totalItems: number;
  currentPage: number;
  limit: number;
  vehicles: IVehicleCreate[];
}

export interface IVehicleCreate {
  id: string;
  name: string;
  brand: string;
  model: string;
  frontImg: string;
  userId: string;
  price: string;
}

export interface IVehicleUpdate {
  name?: string;
  brand?: string;
  model?: string;
  frontImg?: string;
  price?: string;
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

export interface CreateModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChangePageButtonsProps {
  vehiclesPagination: IVehiclePagination;
  onPageChange: (newPage: number) => void;
}
