import { normalize, schema } from "normalizr";
import { IEntities, IPayloadEntities, IPayloadIds } from "../handlers";
import { IState } from "@/contexts";
import {
  IPokemonData,
  IPokemonDataSimple,
  IPokemonVarietyData,
  IPokemonSpeciesData,
  IPokemonVarietyDataSimple,
  IPokemonSpeciesDataSimple,
} from "@/services";

const getPokemonDataSimple = (
  pokemon: IPokemonData,
  state: IState
): IPokemonDataSimple => ({
  ...pokemon,
  types: pokemon.types.map((type) => ({
    ...type,
    type: state.entities.types[type.type.name],
  })),
});

const getPokemonVarietyDataSimple =
  (state: IState) =>
  (variety: IPokemonVarietyData): IPokemonVarietyDataSimple => ({
    ...variety,
    pokemon: getPokemonDataSimple(
      state.entities.pokemons[variety.pokemon.name],
      state
    ),
  });

export const getPokemonSpeciesDataSimple = (
  state: IState,
  species: IPokemonSpeciesData
): IPokemonSpeciesDataSimple => ({
  ...species,
  varieties: species.varieties.map(getPokemonVarietyDataSimple(state)),
});

export const getEntities = <T>(
  data: unknown,
  entityName: string,
  idName?: string
): IEntities<T> => {
  const entity = new schema.Entity<T>(
    entityName,
    undefined,
    idName
      ? {
          idAttribute: idName,
        }
      : undefined
  );
  const { entities, result } = normalize(data, [entity]);

  return {
    entities: entities[entityName] as IPayloadEntities<T>,
    ids: result as IPayloadIds,
  };
};
