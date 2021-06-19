import { createContext, useContext } from "react";
import { useStore } from "./store";
import { useStorage } from "./storage";
import {
  IPokemonContextValue,
  IPokemonProvider,
} from "./pokemon-context.types";

const PokemonContext = createContext<IPokemonContextValue>(undefined);

const usePokemonStorage = (): IPokemonContextValue => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }

  return context;
};

const PokemonProvider: IPokemonProvider = (props) => {
  const store = useStore();
  const storage = useStorage(store);

  return <PokemonContext.Provider value={storage} {...props} />;
};

export { PokemonProvider, usePokemonStorage };
