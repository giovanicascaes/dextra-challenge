import { IPokemon, IPokemonConstructor } from "./pokemon.types";
import { IPokemonType } from "../pokemon-type";
import { IPokemonStat, PokemonStat } from "../pokemon-stat";
import { IPokemonSprites, PokemonSprites } from "../pokemon-sprites";
import { IPokemonDataFull, IPokemonDataSimple } from "@/services";
import { getCommonConstructorData } from "./utils";

export class Pokemon implements IPokemon {
  readonly id: number;
  readonly nameId: string;
  readonly height: number;
  readonly weight: number;
  readonly types: IPokemonType[];
  readonly stats?: IPokemonStat[];
  readonly sprites: IPokemonSprites;

  static instantiateFromSimpleData(data: IPokemonDataSimple): Pokemon {
    return new this(getCommonConstructorData(data));
  }

  static instantiateFromFullData(data: IPokemonDataFull): Pokemon {
    const { stats } = data;
    return new this({
      ...getCommonConstructorData(data),
      stats: stats.map((stat) => new PokemonStat(stat)),
    });
  }

  constructor(data: IPokemonConstructor) {
    this.id = data.id;
    this.nameId = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.sprites = new PokemonSprites(data.sprites);
    this.types = data.types;
    this.stats = data.stats;
  }
}
