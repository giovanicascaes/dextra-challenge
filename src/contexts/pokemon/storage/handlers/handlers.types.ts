import { IPokemonSpecies } from "@/entities";
import { IPokemonData, IPokemonSpeciesData, ITypeData, IUrl } from "@/services";

export interface IActions {
  getSpecies: (page?: number) => void;
}

export type IPayloadEntities<T> = {
  [U in string]: T;
};

export type IPayloadIds = string[];

export interface IPayload {
  count: number;
  page: number;
  next: IUrl | null;
  previous: IUrl | null;
  entities: {
    species: IPayloadEntities<IPokemonSpeciesData>;
    pokemons: IPayloadEntities<IPokemonData>;
    types: IPayloadEntities<ITypeData>;
  };
  ids: {
    species: IPayloadIds;
    pokemons: IPayloadIds;
    types: IPayloadIds;
  };
}

export type IAction =
  | { type: "get-species-init" }
  | { type: "get-species-ok"; payload: IPayload }
  | { type: "get-spcies-error" };

export interface IGetters {
  species: IPokemonSpecies[];
  pageCount: number;
}

export interface IEntities<T> {
  entities: IPayloadEntities<T>;
  ids: IPayloadIds;
}
