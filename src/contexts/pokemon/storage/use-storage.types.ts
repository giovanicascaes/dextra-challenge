import { IActions, IGetters } from "./handlers";

export interface IPokemonStorage {
  actions: IActions;
  getters: IGetters;
}
