import { IAction } from "../storage/handlers";
import {
  IEvolutionChainData,
  IPokemonData,
  IPokemonSpeciesData,
  ITypeData,
  IUrl,
} from "@/services";

export interface IState {
  entities: {
    species: {
      [k in string]: IPokemonSpeciesData;
    };
    evolutions: {
      [k in string]: IEvolutionChainData;
    };
    pokemons: {
      [k in string]: IPokemonData;
    };
    types: {
      [k in string]: ITypeData;
    };
  };
  ids: {
    species: string[];
    evolutions: string[];
    pokemons: string[];
    types: string[];
  };
  loading: boolean;
  error: null | string;
  searchTerm: string;
  previous: null | IUrl;
  next: null | IUrl;
  count: number;
  page: number;
}

export type IReducer = (state: IState, action: IAction) => IState;

export type IDispatch = (action: IAction) => void;

export interface IStore {
  state: IState;
  dispatch: IDispatch;
}
