import { INamed } from "../shared";

export interface IType extends INamed {
  readonly id: number;
  readonly nameId: string;
}
