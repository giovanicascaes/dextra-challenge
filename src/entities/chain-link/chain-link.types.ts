import { IPokemonSpecies } from "../pokemon-species";

export interface IChainLink {
  readonly isBaby: boolean;
  readonly pokemonSpecies: IPokemonSpecies;
  readonly evolvesTo: IChainLink[];
}
