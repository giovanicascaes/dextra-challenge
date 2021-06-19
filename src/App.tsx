import { FC } from "react";
import { Home } from "@/pages";
import { ServicesProvider, ApiProvider, PokemonProvider } from "@/contexts";
import "@/app.scss";

const App: FC<Record<string, never>> = () => (
  <ServicesProvider>
    <ApiProvider>
      <PokemonProvider>
        <Home />
      </PokemonProvider>
    </ApiProvider>
  </ServicesProvider>
);

export default App;
