import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMobile = (currentPage, limit) => {
   const query = useQuery({
      queryKey: ["mobile", currentPage, limit],  // Cache key with dependencies
      queryFn: async () => {
         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/phone`, {
            params: {
               page: currentPage,  // Pass currentPage as a query parameter
               limit: limit        // Pass limit as a query parameter
            }
         });
         return response.data;  // Expecting response.data to have { items, totalPages, currentPage }
      }
   });

   return query; 
};

export default useMobile;
