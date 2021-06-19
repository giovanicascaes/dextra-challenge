import { INamed } from "./named.types";
import { Name, IName } from "../name";
import { DEFAULT_LANG } from "../name/name.types";
import { INameData } from "@/services";

export class Named implements INamed {
  readonly names: IName[];

  constructor(names: INameData[]) {
    if (!names.length) throw new Error("There must be at least one language");

    this.names = names.map((name) => new Name(name));
  }

  getName(lang: string = DEFAULT_LANG): string {
    if (this.names.length > 1) {
      const name = this.names.find((name) => name.lang === lang);

      if (name) return name.name;
    }

    return this.names[0].name;
  }
}
