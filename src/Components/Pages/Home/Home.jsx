import { Outlet,  } from "react-router-dom";
import Product from "../Product/Product";
const Home = () => {
   
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