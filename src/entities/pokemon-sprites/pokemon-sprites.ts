import { IPokemonSprites } from "./pokemon-sprites.types";
import { IPokemonSpritesData, IUrl } from "@/services";

export class PokemonSprites implements IPokemonSprites {
  readonly frontDefault: IUrl;
  readonly frontShiny: IUrl;
  readonly frontFemale: IUrl;
  readonly frontShinyFemale: IUrl;
  readonly backDefault: IUrl;
  readonly backShiny: IUrl;
  readonly backFemale: IUrl;
  readonly backShinyFemale: IUrl;
  readonly officialArtwork: IUrl;

  constructor(data: IPokemonSpritesData) {
    this.frontDefault = data.front_default;
    this.frontShiny = data.front_shiny;
    this.frontFemale = data.front_female;
    this.frontShinyFemale = data.front_shiny_female;
    this.backDefault = data.back_default;
    this.backShiny = data.back_shiny;
    this.backFemale = data.back_female;
    this.backShinyFemale = data.back_shiny_female;
    this.officialArtwork = data.other["official-artwork"].front_default;
  }
}
