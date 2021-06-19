import { IPokemonService } from "./pokemon-service.types";
import { IApiService, INamedApiResourceList, IUrl } from "../api";

export class PokemonService implements IPokemonService {
  private readonly api: IApiService;
  private readonly itemsPerPage: number;

  constructor(api: IApiService, itemsPerPage: number) {
    this.api = api;
    this.itemsPerPage = itemsPerPage;
  }

  async getPokemons(page?: number): Promise<INamedApiResourceList> {
    const searchParams = new URLSearchParams(`limit=${this.itemsPerPage}`);

    if (page !== undefined && page > 1)
      searchParams.append("offset", `${(page - 1) * this.itemsPerPage}`);

    return await this.api.get<INamedApiResourceList>(
      `/pokemon-species?${searchParams.toString()}`
    );
  }

  async mapUrlToEntityData<T>(urls: IUrl[]): Promise<T[]> {
    return Promise.all<T>(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
  }
}
