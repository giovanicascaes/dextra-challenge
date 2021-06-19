import { IChainLink } from "./chain-link.types";
import { IPokemonSpecies, PokemonSpecies } from "../pokemon-species";
import { IChainLinkDataFull } from "@/services";

export class ChainLink implements IChainLink {
  readonly isBaby: boolean;
  readonly pokemonSpecies: IPokemonSpecies;
  readonly evolvesTo: IChainLink[];

  constructor(data: IChainLinkDataFull) {
    this.isBaby = data.is_baby;
    this.pokemonSpecies = PokemonSpecies.instantiateFromSimpleData(
      data.species
    );
    this.evolvesTo = data.evolves_to.map((ev) => new ChainLink(ev));
  }
}
