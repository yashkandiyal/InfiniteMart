import React, { useState } from "react";
import StoreCard from "./StoreCard";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { sortDataHtoL, sortDataLtoH } from "../redux/CartSlices";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const StorePage = () => {
  const items = useSelector((state) => state.cart.availableItems);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");
   const category = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const handleSortClickHtoL = () => {
    dispatch(sortDataHtoL());
  };

  const handleSortClickLtoH = () => {
    dispatch(sortDataLtoH());
  };

  const filteredItems = items.filter((item) => {
    const matchesSearchTerm = searchTerm
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    const matchesCategory = category
      ? item.category.toLowerCase() === category.toLowerCase()
      : true;

    return matchesSearchTerm && matchesCategory;
  });
const totalItems = filteredItems.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const visibleItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

const renderPaginationButtons = () => {
  const buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`mx-1 px-3 py-2 ${
          i === currentPage ? "bg-gray-800 text-white" : "bg-gray-300"
        }`}
      >
        {i}
      </button>
    );
  }

  return buttons;
};

  return (
    <>
      <div className="flex justify-end mt-2 md:mr-16 mr-[3rem]">
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="bordered">Filter</Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="new" onClick={handleSortClickHtoL}>
              Price: High to Low
            </DropdownItem>
            <DropdownItem key="copy" onClick={handleSortClickLtoH}>
              Price: Low to High
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="flex flex-wrap gap-10 mt-10 items-center justify-center">
        {visibleItems.map((item) => (
          <div key={item.id}>
            <StoreCard
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              category={item.category}
              quantity={item.quantity}
              color={item.color}
              size={item.size}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {renderPaginationButtons()}
      </div>
    </>
  );
};

export default StorePage;
