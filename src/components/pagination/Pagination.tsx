import React from "react";
import PageNumber from "./PageNumber";
import PaginationStyled from "./PaginationStyled";
import PaginationWrapper from "./PaginationWrapper";

export type PaginationProps = {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  total,
  current,
  onPageChange,
}) => {
  const calculatePages = () => {
    const pagesToShow = [1, total];

    for (let i = 1; i < 4; i++) {
      if (current + i < total) {
        pagesToShow.push(current + i);
      }

      if (current - i > 1) {
        pagesToShow.push(current - i);
      }
    }

    return pagesToShow.sort((a: number, b: number) => a - b);
  };

  const pagesToShow = calculatePages();

  return (
    <PaginationWrapper>
      <PaginationStyled>
        {pagesToShow.map((page: number) => (
          <PageNumber key={page} onClick={() => onPageChange(page)}>
            {page}
          </PageNumber>
        ))}
      </PaginationStyled>
    </PaginationWrapper>
  );
};

export default Pagination;
