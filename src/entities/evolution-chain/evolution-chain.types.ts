import { IChainLink } from "../chain-link";
import { IPokemonSpecies } from "../pokemon-species";

export interface IEvolutionChain {
  readonly id: number;
  readonly pokemonSpecies: IPokemonSpecies;
  readonly evolvesTo?: IChainLink;
}
