import { IPokemonType } from "../pokemon-type";
import { IPokemonStat } from "../pokemon-stat";
import { IPokemonSprites } from "../pokemon-sprites";
import { IPokemonDataBase } from "@/services";

export interface IPokemon {
  readonly id: number;
  readonly nameId: string;
  readonly height: number;
  readonly weight: number;
  readonly types: IPokemonType[];
  readonly stats?: IPokemonStat[];
  readonly sprites: IPokemonSprites;
}

export interface IPokemonConstructor extends IPokemonDataBase {
  types: IPokemonType[];
  stats?: IPokemonStat[];
}
