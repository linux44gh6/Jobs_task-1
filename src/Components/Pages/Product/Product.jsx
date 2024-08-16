import { useState } from "react";
import Card from "../../Card/Card";
import useMobile from "../../CustomHooks/useMobile";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  
 
  const { data: mobileData, isLoading, isError, error } = useMobile(currentPage, limit);
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const data = mobileData?.items || [];
  const totalPages = mobileData?.totalPages || 0;

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((mobile, indx) => (
          <Card
            key={indx}
            mobile={mobile}
          />
        ))}
      </div>
      
      {/* Pagination*/}
      <div className="pagination mt-4 flex justify-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1} // Disable when on the first page
          className="px-4 py-2 bg-gray-300 text-gray-800"
        >
          Previous
        </button>

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}//jodi current ar mot data hoy tahole ata disable hbe
          className="px-4 py-2 bg-gray-300 text-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
