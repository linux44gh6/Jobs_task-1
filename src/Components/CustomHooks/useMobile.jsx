import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMobile = () => {
   const {mobile,isPending}=useQuery({queryKey:["mobile"],queryFn:async()=>{
    const mobileData=await axios.get(`${import.meta.env.BASE_URL}/phone`)
    return mobileData.data
   }})
    return {mobile,isPending}
};

export default useMobile;