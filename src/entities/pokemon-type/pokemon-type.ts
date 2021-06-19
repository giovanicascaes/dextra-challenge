import { IPokemonType } from "./pokemon-type.types";
import { IType, Type } from "../type";
import { IPokemonTypeDataFull } from "@/services";

export class PokemonType implements IPokemonType {
  readonly slot: number;
  readonly type: IType;

  constructor(data: IPokemonTypeDataFull) {
    this.slot = data.slot;
    this.type = new Type(data.type);
  }
}
