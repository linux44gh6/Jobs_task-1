import { useState, useEffect } from "react";
import Card from "../../Card/Card";
import useMobile from "../../CustomHooks/useMobile";
import debounce from "lodash.debounce";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, Infinity]);
 const [sort,setSort]=useState('')
  const handleSearchChange = debounce((value) => {
    setDebouncedSearch(value);
    setCurrentPage(1);
  }, 1000); // 500ms delay

  useEffect(() => {
    handleSearchChange(search);
  }, [search]);

  const { data: mobileData, isLoading, isError, error } = useMobile(currentPage, limit, debouncedSearch, brand, category, priceRange,sort);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const data = mobileData?.items || [];
  const totalPages = mobileData?.totalPages || 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleToSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setCurrentPage(1);
  };
 const handleSortChange=e=>{
    setSort(e.target.value)
 }
  return (
    <div className="px-1 md:px-3 lg:px-5">
     <div className="flex flex-col md:flex-row lg:flex-row items-center gap-6">
     <form onSubmit={handleToSearch}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by product name"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      </form>
      <div className="mb-4">
        <select onChange={handleSortChange} value={sort}>
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateDesc">Date Added: Newest First</option>
        </select>
      </div>
     </div>


      {/* Filters */}
     <div className=" mb-10">
        <h1 className="text-lg  font-bold">Filter Product</h1>
     <div className="filters mt-4 flex flex-col md:flex-row lg:flex-row">
       
       <div>
         <label className=" font-bold">Brand:</label>
         <input
           type="text"
           value={brand}
           onChange={(e) => setBrand(e.target.value)}
           placeholder="Filter by brand"
         />
       </div>
       <div>
         <label className=" font-bold">Category:</label>
         <input
           type="text"
           value={category}
           onChange={(e) => setCategory(e.target.value)}
           placeholder="Filter by category"
         />
       </div>
       <div>
         <label className=" font-bold">Price Range:</label>
         <input
           type="number"
           value={priceRange[0]}
           onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
           placeholder="Min Price"
         />
         <input
           type="number"
           value={priceRange[1]}
           onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
           placeholder="Max Price"
         />
       </div>
     </div>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
