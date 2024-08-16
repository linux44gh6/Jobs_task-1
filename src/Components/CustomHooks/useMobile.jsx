import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMobile = () => {
   const mobile = useQuery({
      queryKey: ["mobile"],
      queryFn: async () => {
         const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/phone`);
         return data;
      }
   });
   return [mobile];
};

export default useMobile;
