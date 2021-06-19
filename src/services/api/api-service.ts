import { IApiService } from "./api-service.types";

export class ApiService implements IApiService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async http<T>(path: string, config: RequestInit): Promise<T> {
    const request = new Request(this.baseUrl + path, config);
    const response = await fetch(request);

    if (!response.ok) {
      throw response.status;
    }

    return response.json().catch(() => ({}));
  }

  async get<T>(path: string, config?: RequestInit): Promise<T> {
    const init = { method: "get", ...config };
    return this.http<T>(path, init);
  }
}
