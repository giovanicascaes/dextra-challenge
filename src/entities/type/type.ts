import { IType } from "./type.types";
import { Named } from "../shared";
import { ITypeData } from "@/services";

export class Type extends Named implements IType {
  readonly id: number;
  readonly nameId: string;

  constructor(data: ITypeData) {
    super(data.names);
    this.id = data.id;
    this.nameId = data.name;
  }
}
