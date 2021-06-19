import { IUrl } from "@/services";

export interface IPokemonSprites {
  readonly frontDefault: IUrl;
  readonly frontShiny: IUrl;
  readonly frontFemale: IUrl;
  readonly frontShinyFemale: IUrl;
  readonly backDefault: IUrl;
  readonly backShiny: IUrl;
  readonly backFemale: IUrl;
  readonly backShinyFemale: IUrl;
  readonly officialArtwork: IUrl;
}
