import { useMemo, useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reducer";
import { IStore } from "./store.types";

export const useStore = (): IStore => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
};
