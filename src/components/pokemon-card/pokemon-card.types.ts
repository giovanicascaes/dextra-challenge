import { FC } from "react";
import { IType } from "@/entities";

export interface IPokemonCardProps {
  id: number;
  name: string;
  src: string;
  types: IType[];
}

export type IPokemonCard = FC<IPokemonCardProps>;
