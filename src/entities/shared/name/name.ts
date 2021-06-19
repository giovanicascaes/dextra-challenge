import { IName } from "./name.types";
import { INameData } from "@/services";

export class Name implements IName {
  readonly lang: string;
  readonly name: string;

  constructor(nameData: INameData) {
    this.lang = nameData.language.name;
    this.name = nameData.name;
  }
};