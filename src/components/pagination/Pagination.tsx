import React from "react";
import Button from "./Button";
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

    if (current !== 1 && current !== total) {
      pagesToShow.push(current);
    }

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
  console.log("CURRENT: ", current);
  return (
    <PaginationWrapper>
      <PaginationStyled>
        {current > 1 && (
          <Button onClick={() => onPageChange(current - 1)}>← Previous</Button>
        )}
        {pagesToShow.map((page: number) => (
          <PageNumber
            isActive={page === current}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageNumber>
        ))}
        {current < total && (
          <Button onClick={() => onPageChange(current + 1)}> Next →</Button>
        )}
      </PaginationStyled>
    </PaginationWrapper>
  );
};

export default Pagination;
