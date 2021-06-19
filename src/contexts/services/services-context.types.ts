import { FC, ReactNode } from "react";
import { IProvider } from "@/services";

export interface IServiceProviderProps {
  children: ReactNode;
}

export type IServicesProvider = FC<IServiceProviderProps>;

export type IServicesContextValue = undefined | IProvider;
