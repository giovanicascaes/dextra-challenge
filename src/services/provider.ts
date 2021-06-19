import { ApiService, BASE_URL, MAX_ITEMS_PER_PAGE } from "./api";
import { PokemonService } from "./pokemon/pokemon-service";
import { IProvider } from "./provider.types";

export const provider = (): IProvider => {
  const api = new ApiService(BASE_URL);

  return {
    pokemon: new PokemonService(api, MAX_ITEMS_PER_PAGE),
    api,
  };
};
