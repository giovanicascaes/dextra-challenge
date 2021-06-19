import { IPokemon } from "../pokemon";
import { IPokemonVarietyDataBase, IUrl } from "@/services";

export interface IPokemonVariety {
  readonly isDefault: boolean;
  readonly pokemon: IPokemon;

  getOfficialArtwork(): IUrl;
}

export interface IPokemonVarietyConstructor extends IPokemonVarietyDataBase {
  pokemon: IPokemon;
}
