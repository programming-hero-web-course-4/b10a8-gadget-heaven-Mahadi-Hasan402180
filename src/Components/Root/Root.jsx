import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import  { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Toaster />
           <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;