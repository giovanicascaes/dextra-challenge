import { getEntities } from "./builders";
import { IPayload } from "../handlers";
import { IState } from "../../store";
import {
  INamedApiResourceList,
  IPokemonSpeciesData,
  IPokemonService,
  IPokemonData,
  ITypeData,
} from "@/services";

export const formatSpeciesResponseToStore = async (
  service: IPokemonService,
  state: IState,
  response: INamedApiResourceList,
  page = 1
): Promise<IPayload> => {
  const { count, next, previous, results: speciesResults } = response;
  const payload: IPayload = {
    count,
    page,
    next,
    previous,
    entities: {
      species: {},
      pokemons: {},
      types: {},
    },
    ids: {
      species: [],
      pokemons: [],
      types: [],
    },
  };

  const speciesNotInState = speciesResults.filter(
    (raw) => !state.ids.species.includes(raw.name)
  );

  if (speciesNotInState.length) {
    const speciesFull = await service.mapUrlToEntityData<IPokemonSpeciesData>(
      speciesNotInState.map((res) => res.url)
    );

    const { entities: speciesEntities, ids: speciesIds } =
      getEntities<IPokemonSpeciesData>(speciesFull, "species", "name");

    payload.entities.species = speciesEntities;
    payload.ids.species.push(...speciesIds);

    const pokemonsNotInState = speciesResults
      .map((raw) => speciesEntities[raw.name])
      .flatMap((entity) => entity.varieties)
      .map((variety) => variety.pokemon)
      .filter((pokemon) => !state.ids.pokemons.includes(pokemon.name));

    if (pokemonsNotInState.length) {
      const pokemonsFull = await service.mapUrlToEntityData<IPokemonData>(
        pokemonsNotInState.map((res) => res.url)
      );
      const { entities: pokemonEntities, ids: pokemonIds } =
        getEntities<IPokemonData>(pokemonsFull, "pokemons", "name");

      payload.entities.pokemons = pokemonEntities;
      payload.ids.pokemons.push(...pokemonIds);

      const typesNotInState = pokemonsFull
        .flatMap((pokemon) => pokemon.types)
        .map((type) => type.type)
        .filter((type) => !state.ids.types.includes(type.name));

      if (typesNotInState.length) {
        const typesFull = await service.mapUrlToEntityData<ITypeData>(
          Array.from(new Set(typesNotInState.map((res) => res.url)))
        );
        const { entities: typesEntities, ids: typesIds } =
          getEntities<ITypeData>(typesFull, "types", "name");

        payload.entities.types = typesEntities;
        payload.ids.types.push(...typesIds);
      }
    }
  }

  return payload;
};
