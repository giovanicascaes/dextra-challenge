import { createContext, useContext } from "react";
import { useServices } from "../services";
import { IApiContextValue, IApiProvider, IUseApi } from "./api-context.types";

const ApiContext = createContext<IApiContextValue>(undefined);

function useApi(): IUseApi {
  const context = useContext(ApiContext);

  if (!context) throw new Error("useApi must be used within an ApiProvider");

  return context;
}

const ApiProvider: IApiProvider = (props) => {
  const services = useServices();

  if (!services)
    throw new Error("useApi must be used within a ServicesProvider");

  return <ApiContext.Provider value={services.api} {...props} />;
};

export { ApiProvider, useApi };
