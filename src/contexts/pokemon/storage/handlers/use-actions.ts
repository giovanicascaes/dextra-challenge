import { useCallback, useMemo } from "react";
import { IActions } from "./handlers.types";
import { IStore } from "../../store/store.types";
import { IProvider } from "@/services";
import { useServices } from "@/contexts";
import { formatSpeciesResponseToStore as formatSpeciesResponseToActionPayload } from "../helpers";

export const useActions = ({ state, dispatch }: IStore): IActions => {
  const { pokemon } = useServices() as IProvider;

  const getSpecies = useCallback(
    async (page?: number) => {
      dispatch({ type: "get-species-init" });

      const response = await pokemon.getPokemons(page);
      const payload = await formatSpeciesResponseToActionPayload(
        pokemon,
        state,
        response,
        page
      );

      dispatch({
        type: "get-species-ok",
        payload,
      });
    },
    [dispatch, pokemon, state]
  );

  return useMemo(
    () => ({
      getSpecies,
    }),
    [getSpecies]
  );
};
