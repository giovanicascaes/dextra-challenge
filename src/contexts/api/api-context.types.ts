import { FC, ReactNode } from "react";
import { IApiService } from "@/services";

export type IApiContextValue = undefined | IApiService;

export interface IApiProviderProps {
  children: ReactNode;
}

export type IApiProvider = FC<IApiProviderProps>;

export type IUseApi = IApiContextValue;
