import { useEffect, useState } from "react";
import { getallfavorites } from "../utils/utils";
import Gadget from "../Gadget/Gadget";

const Cart = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fbrt = getallfavorites();
        setProducts(fbrt);
    }, []);

    // Sorting function
    const handleSortByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    return (
        <div>
            <h2 className="font-bold text-2xl mt-7 text-center">CART</h2>

            {/* Sort Button */}
            <div className="text-center mb-7 mt-4">
                <button
                    onClick={handleSortByPrice}
                    className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg"
                >
                    Sort By Price
                </button>
            </div>

            {/* Product List */}
            <div className="w-3/4 grid grid-cols-3 gap-6 p-5">
                {products.map((gadget) => (
                    <Gadget gadget={gadget} key={gadget.product_id} />
                ))}
            </div>
        </div>
    );
};

export default Cart;
