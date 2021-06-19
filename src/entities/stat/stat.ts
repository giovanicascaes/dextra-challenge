import { IStat } from "./stat.types";
import { Named } from "../shared";
import { IStatData } from "@/services";

export class Stat extends Named implements IStat {
  readonly id: number;
  readonly nameId: string;

  constructor(data: IStatData) {
    super(data.names);
    this.id = data.id;
    this.nameId = data.name;
  }
}
