import React, { FC, useState } from "react";
import s from "./Users.module.css";
import cn from "classnames";

type PaginatorProps = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  portionSize: number;
  onPageChange: (page: number) => void;
};
const Paginator: FC<PaginatorProps> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  const pageCount = Math.ceil(totalItemsCount / portionSize);
  const pages = [];

  for (let i = 1; i <= totalItemsCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pageCount / pageSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber + portionSize;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          prev
        </button>
      )}
      {pages.map((p) => (
        <span>{p}</span>
      ))}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          <span
            // className={cn(
            //   { [s.selectedPage]: currentPage === p },
            //   s.pageNumber
            // )}
            key={p}
            onClick={(e) => onPageChange(p)}
          >
            1
          </span>;
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Paginator;
