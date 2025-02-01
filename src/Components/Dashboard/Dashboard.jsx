import { useState } from "react";
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";
import { Helmet } from 'react-helmet';


const Dashboard = () => {
    const [isActive, setIsActive] = useState({
        cart: true,
        status: "cart"
    });

    const handleStatusActive = (status) => {
        setIsActive({
            cart: status === "cart",
            status: status
        });
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {/* Header Section */}
            <div className="hero bg-[#9538E2] p-8 h-80 text-white mt-2 rounded-2xl">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. 
                            From smart devices to the coolest accessories, we have it all!
                        </p>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 justify-center">
                            <button 
                                onClick={() => handleStatusActive("cart")} 
                                className={`btn ${isActive.cart ? "bg-white font-bold text-[#9538E2]" : " bg-[#9538E2]"}`}
                            >
                                CART
                            </button>
                            <button 
                                onClick={() => handleStatusActive("wishlist")} 
                                className={`btn ${!isActive.cart ? "bg-white font-bold text-[#9538E2]" : " bg-[#9538E2] "}`}
                            >
                                WISHLIST
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render Components Based on Active State */}
            <div className="mt-6">
                {isActive.cart ? <Cart /> : <Wish />}
            </div>
        </div>
    );
};

export default Dashboard;
