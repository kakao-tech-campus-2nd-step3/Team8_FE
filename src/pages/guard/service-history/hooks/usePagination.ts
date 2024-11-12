import { useState } from 'react';

export const usePagination = (initialPage: number, totalPages: number) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  return {
    currentPage,
    goToPreviousPage,
    goToNextPage,
    setCurrentPage,
  };
};
