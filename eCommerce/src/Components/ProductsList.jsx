import { NavLink } from "react-router-dom";
import { useStore } from "../Context";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export function ProductsList({ products }) {
  const { addCart, filterData } = useStore();
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const productPerPage = 9;

  // Calculate indexes of the products to display on the current page
  const indexOfLastProduct = Math.min(
    currentPage * productPerPage,
    products.length
  );

  const indexOfFirstPage = indexOfLastProduct - productPerPage;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const filterProducts =
    filterData === "All"
      ? products
      : products.filter(
          (product) => product.category === filterData.toLowerCase()
        );
  console.log(filterProducts);
  return (
    <div className="p-[2rem]">
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
        {filterProducts
          .slice(indexOfFirstPage, indexOfLastProduct)
          .map((product) => (
            <NavLink to={`/${product.id}`} key={product.id}>
              <div>
                <div>
                  <h2 className="font-bold text-xl text-gray-900 md:text-lg sm:text-center">
                    {product.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt="Product 1 image"
                    className="mb-4 h-[13rem] hover:scale-105 transform transition z-[-1]"
                    src={product.image}
                    style={{
                      aspectRatio: "3/2",
                      objectFit: "contain",
                    }}
                  />

                  <button
                    onClick={() => addCart(product.id)}
                    className="bg-purple-500 p-2 w-40 font-bold text-white"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
      </main>

      {/* Pagination component */}
      {filterData === "All" && (
        <Pagination
          count={Math.ceil(products.length / productPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          className="flex justify-center"
        />
      )}
    </div>
  );
}
