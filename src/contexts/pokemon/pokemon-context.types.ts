import { FC, ReactNode } from "react";
import { IPokemonStorage } from "./storage";

export interface IPokemonProviderProps {
  children: ReactNode;
}

export type IPokemonProvider = FC<IPokemonProviderProps>;

export type IPokemonContextValue = undefined | IPokemonStorage;
