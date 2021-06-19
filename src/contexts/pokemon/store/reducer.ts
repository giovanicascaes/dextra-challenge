import produce from "immer";
import { IReducer, IState } from "./store.types";

export const INITIAL_STATE: IState = {
  error: null,
  loading: false,
  searchTerm: "",
  entities: {
    species: {},
    evolutions: {},
    pokemons: {},
    types: {},
  },
  ids: {
    species: [],
    evolutions: [],
    pokemons: [],
    types: [],
  },
  previous: null,
  next: null,
  count: 0,
  page: 1,
};

export const reducer = produce<IReducer>((draft, action) => {
  switch (action.type) {
    case "get-species-init": {
      draft.loading = true;
      break;
    }
    case "get-species-ok": {
      const { count, page, next, previous, entities, ids } = action.payload;
      draft.count = count;
      draft.page = page;
      draft.next = next;
      draft.previous = previous;
      Object.assign(draft.entities.species, entities.species);
      Object.assign(draft.entities.pokemons, entities.pokemons);
      Object.assign(draft.entities.types, entities.types);
      draft.ids.species.push(...ids.species);
      draft.ids.pokemons.push(...ids.pokemons);
      draft.ids.types.push(...ids.types);
      break;
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
});
