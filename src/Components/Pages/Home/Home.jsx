import { Outlet,  } from "react-router-dom";
import Product from "../Product/Product";
import Nav from "../../../Shared/NavBar/Nav";
import Footer from "../../../Shared/Footer/Footer";
const Home = () => {
   
    return (
        <div>
           <Outlet></Outlet>
           <div>
            <Nav></Nav>
            <Product></Product>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;