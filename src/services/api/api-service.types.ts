export interface IApiService {
  get<T>(path: string, config?: RequestInit): Promise<T>;
}

export type IRequestError = number;

export type IUrl = string;

export interface IApiResource {
  url: IUrl;
}

export interface INamedApiResource extends IApiResource {
  name: string;
}

export interface INamedApiResourceList {
  count: number;
  next: IUrl | null;
  previous: IUrl | null;
  results: INamedApiResource[];
}

export interface ILanguageData {
  name: string;
}

export interface INameData {
  name: string;
  language: INamedApiResource;
}

export interface IStatData {
  id: number;
  name: string;
  names: INameData[];
}

export interface IPokemonStatData {
  stat: INamedApiResource;
  base_stat: number;
}

export interface IPokemonSpritesData {
  front_default: IUrl;
  front_shiny: IUrl;
  front_female: IUrl;
  front_shiny_female: IUrl;
  back_default: IUrl;
  back_shiny: IUrl;
  back_female: IUrl;
  back_shiny_female: IUrl;
  other: {
    "official-artwork": {
      front_default: IUrl;
    };
  };
}

export interface ITypeData {
  id: number;
  name: string;
  names: INameData[];
}

export interface IPokemonTypeData {
  slot: number;
  type: INamedApiResource;
}

export interface IPokemonData {
  id: number;
  name: string;
  sprites: IPokemonSpritesData;
  height: number;
  weight: number;
  types: IPokemonTypeData[];
  stats: IPokemonStatData[];
}

export interface IPokemonVarietyData {
  is_default: boolean;
  pokemon: INamedApiResource;
}

export interface IPokemonSpeciesData {
  id: number;
  name: string;
  order: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  has_gender_differences: boolean;
  color: INamedApiResource;
  evolution_chain: IApiResource;
  names: INameData[];
  varieties: IPokemonVarietyData[];
}

export interface IChainLinkData {
  is_baby: boolean;
  species: INamedApiResource;
  evolves_to: IChainLinkData[];
}

export interface IEvolutionChainData {
  id: number;
  chain: IChainLinkData;
}

export type IChainLinkDataFull = Omit<
  IChainLinkData,
  "species" | "evolves_to"
> & {
  species: IPokemonSpeciesDataFull;
  evolves_to: IChainLinkDataFull[];
};

export type IEvolutionChainDataFull = Omit<IEvolutionChainData, "chain"> & {
  id: number;
  chain: IChainLinkDataFull;
};

export type IPokemonStatDataFull = Omit<IPokemonStatData, "stat"> & {
  stat: IStatData;
  base_stat: number;
};

export type IPokemonTypeDataFull = Omit<IPokemonTypeData, "type"> & {
  type: ITypeData;
};

export type IPokemonDataBase = Omit<IPokemonData, "types" | "stats">;

export interface IPokemonDataSimple extends IPokemonDataBase {
  types: IPokemonTypeDataFull[];
}

export type IPokemonVarietyDataBase = Omit<IPokemonVarietyData, "pokemon">;

export interface IPokemonVarietyDataSimple extends IPokemonVarietyDataBase {
  pokemon: IPokemonDataSimple;
}

export type IPokemonSpeciesDataBase = Omit<
  IPokemonSpeciesData,
  "varieties" | "evolution_chain"
>;

export interface IPokemonSpeciesDataSimple extends IPokemonSpeciesDataBase {
  varieties: IPokemonVarietyDataSimple[];
}

export interface IPokemonDataFull extends IPokemonDataSimple {
  stats: IPokemonStatDataFull[];
}

export type IPokemonVarietyDataFull = Omit<IPokemonVarietyData, "pokemon"> & {
  is_default: boolean;
  pokemon: IPokemonDataFull;
};

export interface IPokemonSpeciesDataFull extends IPokemonSpeciesDataSimple {
  evolution_chain: IEvolutionChainDataFull;
  varieties: IPokemonVarietyDataFull[];
}

export const BASE_URL = "https://pokeapi.co/api/v2/";

export const MAX_ITEMS_PER_PAGE = 10;
