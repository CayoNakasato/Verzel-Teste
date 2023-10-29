import {
  IVehicleContextData,
  IVehicleCreate,
  IVehiclePagination,
  IVehicleUpdate,
} from "../interfaces/Vehicle/vehicle.interface";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { ProviderData } from "../interfaces/provider.interface";
import { api } from "../api";

export const VehicleContext = createContext<IVehicleContextData>(
  {} as IVehicleContextData
);

export const VehicleProvider = ({ children }: ProviderData) => {
  const token = localStorage.getItem("@Token");

  const [vehicles, setVehicles] = useState<IVehicleCreate[]>(
    [] as IVehicleCreate[]
  );

  const [vehiclesPagination, setVehiclesPagination] =
    useState<IVehiclePagination>({
      totalItems: 0,
      currentPage: 1,
      limit: 10,
      vehicles: [],
    });

  const createVehicle = async (data: IVehicleCreate) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await api
      .post("/vehicles", data)
      .then((resp) => {
        const newVehicle = resp.data;

        setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);

        toast.success("Veículo adicionado com suceso!");
      })
      .catch((err) => console.log(err));
  };

  const getVehicles = async () => {
    await api.get("/vehicles").then((res) => {
      setVehicles(res.data);
    });
  };

  const getVehiclesPerPage = async (currentPage: number) => {
    if(currentPage === undefined){
      return
    }
    await api.get(`/vehicles/pagination/?page=${currentPage}`).then((res) => {
      setVehiclesPagination({
        totalItems: res.data.totalItems,
        currentPage: res.data.currentPage,
        limit: res.data.limit,
        vehicles: res.data.vehicles,
      });
    });
  };

  const deleteVehicle = async (vehicleId: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await api.delete(`/vehicles/${vehicleId}`).then(() => {
      setVehicles((prevVehicles) =>
        prevVehicles.filter((vehicle) => vehicle.id !== vehicleId)
      );
      toast.success("Veículo excluído com sucesso!");
    });
  };

  const updateVehicle = async (data: IVehicleUpdate, vehicleId: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await api
      .patch(`/vehicles/${vehicleId}`, data)
      .then((resp) => {
        console.log(resp);
        setVehicles((prevVehicles) =>
          prevVehicles.map((vehicle) =>
            vehicle.id === vehicleId ? resp.data : vehicle
          )
        );
        toast.success("Veículo editado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <VehicleContext.Provider
      value={{
        createVehicle,
        getVehicles,
        deleteVehicle,
        updateVehicle,
        getVehiclesPerPage,
        vehiclesPagination,
        vehicles,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
