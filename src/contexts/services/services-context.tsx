import { createContext, useContext, useMemo } from "react";
import {
  IServicesContextValue,
  IServicesProvider,
} from "./services-context.types";
import { provider } from "@/services";

const ServicesContext = createContext<IServicesContextValue>(undefined);

const useServices = (): IServicesContextValue => {
  const context = useContext(ServicesContext);

  if (!context) {
    throw new Error("useService must be used within a ServicesProvider");
  }

  return context;
};

const ServicesProvider: IServicesProvider = (props) => {
  const services = useMemo(() => provider(), []);

  return <ServicesContext.Provider value={services} {...props} />;
};

export { ServicesProvider, useServices };
