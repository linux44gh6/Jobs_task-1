import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMobile = (currentPage, limit,search) => {
   const query = useQuery({
      queryKey: ["mobile", currentPage, limit,search],  
      queryFn: async () => {
         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/phone`, {
            params: {
               page: currentPage,  
               limit: limit,  
               search:search    
            }
         });
         return response.data;  
      }
   });

   return query; 
};

export default useMobile;
