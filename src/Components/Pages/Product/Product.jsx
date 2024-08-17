import { useState, useEffect } from "react";
import Card from "../../Card/Card";
import useMobile from "../../CustomHooks/useMobile";
import debounce from "lodash.debounce";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

 
  const handleSearchChange = debounce((value) => {
    setDebouncedSearch(value);
    setCurrentPage(1);
  }, 1000); // 500ms delay

  useEffect(() => {
    handleSearchChange(search);
  }, [search]);

  const { data: mobileData, isLoading, isError, error } = useMobile(currentPage, limit, debouncedSearch);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const data = mobileData?.items || [];
  const totalPages = mobileData?.totalPages || 0;
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleToSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value); // Set the search state on form submission
  };

  return (
    <div>
      <form onSubmit={handleToSearch}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update the search state
          placeholder="Search by product name"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
       
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((mobile, indx) => (
          <Card
            key={indx}
            mobile={mobile}
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="pagination mt-4 flex justify-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-800"
        >
          Previous
        </button>

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
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
