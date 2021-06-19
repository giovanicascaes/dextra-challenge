import { FC } from "react";
import { IBadgeProps } from "./badge.types";

export const Badge: FC<IBadgeProps> = ({
  text,
  size = "small",
}: IBadgeProps) => {
  return <div>{text}</div>;
};
