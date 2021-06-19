import { IName } from "../name/name.types";

export interface INamed {
  readonly names: IName[];

  getName(lang?: string): string;
}
