import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMobile = (currentPage, limit, search, brand, category, priceRange,sort) => {
  const query = useQuery({
    queryKey: ["mobile", currentPage, limit, search, brand, category, priceRange,sort],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/phone`, {
        params: {
          page: currentPage,
          limit: limit,
          search: search,
          brand: brand,
          category: category,
          priceRange: priceRange.join(','),
          sort:sort 
        },
      });
      return response.data;
    },
  });

  return query;
};

export default useMobile;
