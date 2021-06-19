import { IPokemonCard, IPokemonCardProps } from "./pokemon-card.types";
import { Badge } from "../badge";

export const PokemonCard: IPokemonCard = ({
  id,
  name,
  src,
  types,
}: IPokemonCardProps) => {
  return (
    <div className="flex flex-col w-full">
      <img src={src} className="w-[460px]" />
      <span>{id}</span>
      <span>{name}</span>
      {types.map((type) => (
        <Badge key={type.nameId} text={type.getName()} />
      ))}
    </div>
  );
};
