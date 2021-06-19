import { INamed } from "../shared";

export interface IStat extends INamed {
  readonly id: number;
  readonly nameId: string;
}

export const DEFENSE_NAME = "defense";
export const ATTACK_NAME = "attack";
export const HP_NAME = "hp";
export const SPEED_NAME = "hp";
