import {
  IPokemonSpecies,
  IPokemonSpeciesConstructor,
} from "./pokemon-species.types";
import { EvolutionChain, IEvolutionChain } from "../evolution-chain";
import { IPokemonVariety, PokemonVariety } from "../pokemon-variety";
import { Named } from "../shared";
import { IPokemonSpeciesDataFull, IPokemonSpeciesDataSimple } from "@/services";

export class PokemonSpecies extends Named implements IPokemonSpecies {
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

  static instantiateFromSimpleData(
    data: IPokemonSpeciesDataSimple
  ): PokemonSpecies {
    const { varieties, ...other } = data;
    return new this({
      ...other,
      varieties: varieties.map((variety) =>
        PokemonVariety.instantiateFromSimpleData(variety)
      ),
    });
  }

  static instantiateFromFullData(
    data: IPokemonSpeciesDataFull
  ): PokemonSpecies {
    const { evolution_chain, varieties, ...other } = data;
    return new this({
      ...other,
      evolutionChain: new EvolutionChain(evolution_chain),
      varieties: varieties.map((variety) =>
        PokemonVariety.instantiateFromFullData(variety)
      ),
    });
  }

  constructor(data: IPokemonSpeciesConstructor) {
    super(data.names);
    this.id = data.id;
    this.nameId = data.name;
    this.order = data.order;
    this.isBaby = data.is_baby;
    this.isLegendary = data.is_legendary;
    this.isMythical = data.is_mythical;
    this.hasGenderDifferences = data.has_gender_differences;
    this.color = data.color.name;
    this.varieties = data.varieties;
    this.evolutionChain = data.evolutionChain;
  }

  getDefaulVariant(): IPokemonVariety {
    return this.varieties.find(
      (variety) => variety.isDefault
    ) as IPokemonVariety;
  }
}
