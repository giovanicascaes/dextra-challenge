import { PokemonType } from "../pokemon-type";
import { IPokemonDataSimple } from "@/services";
import { IPokemonConstructor } from "./pokemon.types";

export const getCommonConstructorData = ({
  types,
  ...other
}: IPokemonDataSimple): IPokemonConstructor => ({
  ...other,
  types: types.map((type) => new PokemonType(type)),
});
