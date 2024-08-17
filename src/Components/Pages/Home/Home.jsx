import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../../Shared/NavBar/Nav";
import Footer from "../../../Shared/Footer/Footer";
import Product from "../Product/Product";

const Home = () => {
    
    return (
        <div>
        
                    <Nav></Nav>
                    <Product />
              
        <Footer></Footer>
            
        </div>
    );
};

export default Home;
