import { ReactPaginateProps } from "react-paginate";

export type IPaginationProps = Omit<
  ReactPaginateProps,
  | "previousLabel"
  | "nextLabel"
  | "breakLabel"
  | "marginPagesDisplayed"
  | "pageRangeDisplayed"
  | "pageClassName"
  | "previousClassName"
  | "nextClassName"
  | "breakClassName"
  | "disabledClassName"
  | "activeClassName"
  | "pageLinkClassName"
>;
