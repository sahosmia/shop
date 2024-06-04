import { memo } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CustomPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage:number
  onPageChange: (value: number) => void;
}) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const numbersArray = Array(totalPages)
    .fill("*")
    .map((_, index) => index + 1);

  return (
    <div className="pagination pt-4">
      <ul className="pagination-list flex gap-2">
        <li
          key="prev"
          className={`${
            currentPage === 1 ? "hidden " : ""
          } hover:bg-red-200 block rounded-full w-8 h-8 leading-8 text-sm cursor-pointer text-center`}
        >
          <button onClick={() => handlePageChange(currentPage - 1)}>
            <FiArrowLeft />
          </button>
        </li>

        {numbersArray.map((item) => (
          <li
            key={item}
            className={`${
              currentPage === item ? "bg-red-200 " : ""
            } hover:bg-red-200 inline-block rounded-full w-8 h-8 leading-8 text-sm cursor-pointer text-center`}
          >
            <button onClick={() => handlePageChange(item)}>{item}</button>
          </li>
        ))}

        <li
          key="next"
          className={`${
            currentPage === totalPages ? "hidden " : ""
          } hover:bg-red-200 block rounded-full w-8 h-8 leading-8 text-sm cursor-pointer text-center`}
        >
          <button onClick={() => handlePageChange(currentPage + 1)}>
            <FiArrowRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default memo(CustomPagination);
