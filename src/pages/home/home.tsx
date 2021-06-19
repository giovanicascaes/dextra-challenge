import { useCallback } from "react";
import { IHome } from "./home.types";
import { PokemonCard, Pagination } from "@/components";
import { usePokemonStorage, IPokemonStorage } from "@/contexts";
import { useDidMount } from "@/utils";

export const Home: IHome = () => {
  const { actions, getters } = usePokemonStorage() as IPokemonStorage;

  useDidMount(
    useCallback(() => {
      actions.getSpecies();
    }, [actions])
  );

  return (
    <div className="max-w-3/5 w-full items-center">
      <input placeholder="Search here" className="w-full my-12" />
      <div className="grid grid-cols-4 gap-30">
        {getters.species.map((specie) => {
          const defaultVariant = specie.getDefaulVariant();
          return (
            <PokemonCard
              key={specie.id}
              id={specie.id}
              name={specie.getName()}
              src={defaultVariant.getOfficialArtwork()}
              types={defaultVariant.pokemon.types.map((type) => type.type)}
            />
          );
        })}
      </div>
      <Pagination
        pageCount={getters.pageCount}
        onPageChange={({ selected }) => actions.getSpecies(selected + 1)}
        containerClassName="my-12"
      />
    </div>
  );
};
