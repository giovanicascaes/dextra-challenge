import { useMemo } from "react";
import { IGetters } from "./handlers.types";
import { getPokemonSpeciesDataSimple } from "../helpers";
import { IState } from "../../store";
import { PokemonSpecies } from "@/entities";
import { MAX_ITEMS_PER_PAGE } from "@/services";

export const useGetters = (state: IState): IGetters => {
  const currentPageSliceIds = useMemo(() => {
    const startId = (state.page - 1) * MAX_ITEMS_PER_PAGE + 1;
    const endId = Math.min(startId + MAX_ITEMS_PER_PAGE - 1, state.count);
    return [startId, endId];
  }, [state.count, state.page]);

  const species = useMemo(() => {
    if (!state.ids.species.length) return [];

    const speciesDataSorted = state.ids.species
      .map((name) => state.entities.species[name])
      .sort((a, b) => (a.order < b.order ? -1 : 1));
    console.log(
      "🚀 ~ file: use-getters.ts ~ line 19 ~ species ~ speciesDataSorted",
      speciesDataSorted
    );

    const [startId, endId] = currentPageSliceIds;
    console.log(
      "🚀 ~ file: use-getters.ts ~ line 21 ~ species ~ currentPageSliceIds",
      currentPageSliceIds
    );
    const sliceIndexes = [];

    for (let i = 0; sliceIndexes.length < 2; i++) {
      const specieData = speciesDataSorted[i];

      console.log(
        "🚀 ~ file: use-getters.ts ~ line 31 ~ species ~ specieData.order",
        specieData.order
      );
      if (specieData.id === startId) sliceIndexes.unshift(i);
      else if (specieData.id === endId) sliceIndexes.push(i + 1);
      console.log(
        "🚀 ~ file: use-getters.ts ~ line 41 ~ species ~ sliceIndexes",
        sliceIndexes
      );
    }

    console.log(
      "🚀 ~ file: use-getters.ts ~ line 26 ~ species ~ sliceIndexes",
      sliceIndexes
    );
    return speciesDataSorted
      .slice(...sliceIndexes)
      .map((species) =>
        PokemonSpecies.instantiateFromSimpleData(
          getPokemonSpeciesDataSimple(
            state,
            state.entities.species[species.name]
          )
        )
      );
  }, [currentPageSliceIds, state]);

  const pageCount = useMemo(
    () => Math.ceil(state.count / MAX_ITEMS_PER_PAGE),
    [state.count]
  );

  return useMemo(
    () => ({
      species,
      pageCount,
    }),
    [pageCount, species]
  );
};
