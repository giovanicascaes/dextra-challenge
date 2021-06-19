import { INamedApiResourceList, IUrl } from "../api";

export interface IPokemonService {
  getPokemons: (page?: number) => Promise<INamedApiResourceList>;
  mapUrlToEntityData: <T>(urls: IUrl[]) => Promise<T[]>;
}
