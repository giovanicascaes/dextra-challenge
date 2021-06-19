import { useMemo } from "react";
import { IPokemonStorage } from "./use-storage.types";
import { IStore } from "../store";
import { useActions, useGetters } from "./handlers";

export const useStorage = (store: IStore): IPokemonStorage => {
  const actions = useActions(store);
  const getters = useGetters(store.state);

  return useMemo(
    () => ({
      actions,
      getters,
    }),
    [actions, getters]
  );
};
