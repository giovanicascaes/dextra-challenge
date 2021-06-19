import { FC } from "react";
import ReactPaginate from "react-paginate";
import classNames from "classnames";
import { IPaginationProps } from "./pagination.types";
import "./pagination.scss";

export const Pagination: FC<IPaginationProps> = ({
  pageCount,
  onPageChange,
  containerClassName,
  ...other
}: IPaginationProps) => (
  <ReactPaginate
    {...other}
    containerClassName={classNames(
      "home_pagination-wrapper",
      containerClassName
    )}
    pageClassName="home_pagination-page"
    previousClassName="home_pagination-page"
    nextClassName="home_pagination-page"
    breakClassName="home_pagination-page"
    disabledClassName="home_pagination-disabled"
    activeClassName="home_pagination-active"
    pageLinkClassName="home_pagination-link"
    previousLabel="Previous"
    nextLabel="Next"
    breakLabel="..."
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={onPageChange}
  />
);
