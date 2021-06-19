import {
  IPokemonVariety,
  IPokemonVarietyConstructor,
} from "./pokemon-variety.types";
import { IPokemon, Pokemon } from "../pokemon";
import {
  IPokemonVarietyDataFull,
  IPokemonVarietyDataSimple,
  IUrl,
} from "@/services";

export class PokemonVariety implements IPokemonVariety {
  readonly isDefault: boolean;
  readonly pokemon: IPokemon;

  static instantiateFromSimpleData(
    data: IPokemonVarietyDataSimple
  ): PokemonVariety {
    const { pokemon, ...other } = data;
    return new this({
      ...other,
      pokemon: Pokemon.instantiateFromSimpleData(pokemon),
    });
  }

  static instantiateFromFullData(
    data: IPokemonVarietyDataFull
  ): PokemonVariety {
    const { pokemon, ...other } = data;
    return new this({
      ...other,
      pokemon: Pokemon.instantiateFromFullData(pokemon),
    });
  }

  constructor(data: IPokemonVarietyConstructor) {
    this.isDefault = data.is_default;
    this.pokemon = data.pokemon;
  }

  getOfficialArtwork(): IUrl {
    return this.pokemon.sprites.officialArtwork;
  }
}
