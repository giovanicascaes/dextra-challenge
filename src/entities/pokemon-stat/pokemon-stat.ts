import { IPokemonStat } from "./pokemon-stat.types";
import { IStat, Stat } from "../stat";
import { IPokemonStatDataFull } from "@/services";

export class PokemonStat implements IPokemonStat {
  readonly baseStat: number;
  readonly stat: IStat;

  constructor(data: IPokemonStatDataFull) {
    this.baseStat = data.base_stat;
    this.stat = new Stat(data.stat);
  }
}
