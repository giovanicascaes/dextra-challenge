import { IPokemonSpeciesDataBase } from "@/services";
import { IEvolutionChain } from "../evolution-chain";
import { IPokemonVariety } from "../pokemon-variety";
import { INamed } from "../shared";

export interface IPokemonSpecies extends INamed {
  readonly id: number;
  readonly nameId: string;
  readonly order: number;
  readonly isBaby: boolean;
  readonly isLegendary: boolean;
  readonly isMythical: boolean;
  readonly hasGenderDifferences: boolean;
  readonly color: string;
  readonly evolutionChain?: IEvolutionChain;
  readonly varieties: IPokemonVariety[];

  getDefaulVariant(): IPokemonVariety;
}

export interface IPokemonSpeciesConstructor extends IPokemonSpeciesDataBase {
  varieties: IPokemonVariety[];
  evolutionChain?: IEvolutionChain;
}
