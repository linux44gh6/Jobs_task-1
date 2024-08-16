import { Outlet, useLocation } from "react-router-dom";
import Product from "../Product/Product";
const Home = () => {
    const location=useLocation()
    return (
        <div>
           <Outlet></Outlet>
           <div>
            <Product></Product>
           </div>
        </div>
    );
};

export default Home;