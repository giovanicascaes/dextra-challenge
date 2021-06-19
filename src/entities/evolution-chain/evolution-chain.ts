import { IEvolutionChain } from "./evolution-chain.types";
import { IPokemonSpecies, PokemonSpecies } from "../pokemon-species";
import { IEvolutionChainDataFull } from "@/services";
import { ChainLink, IChainLink } from "../chain-link";

export class EvolutionChain implements IEvolutionChain {
  readonly id: number;
  readonly pokemonSpecies: IPokemonSpecies;
  readonly evolvesTo?: IChainLink;

  constructor(data: IEvolutionChainDataFull) {
    this.id = data.id;
    this.pokemonSpecies = PokemonSpecies.instantiateFromSimpleData(
      data.chain.species
    );
    this.evolvesTo = new ChainLink(data.chain);
  }
}
