import { IPokemonService } from "./pokemon";
import { IApiService } from "./api";

export interface IProvider {
  pokemon: IPokemonService;
  api: IApiService;
}
