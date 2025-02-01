import { useEffect, useState } from "react";
import { getallfavorites } from "../utils/utils";
import Gadget from "../Gadget/Gadget";

const Wish = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const favorites = getallfavorites();
        setWishlist(favorites);
    }, []);

    // Sorting function (Descending Order)
    const handleSortByPrice = () => {
        const sortedWishlist = [...wishlist].sort((a, b) => b.price - a.price);
        setWishlist(sortedWishlist);
    };

    return (
        <div>
            <h2 className="font-bold text-2xl mt-7 text-center">WISHLIST</h2>

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
                {wishlist.length > 0 ? (
                    wishlist.map((gadget) => (
                        <Gadget gadget={gadget} key={gadget.product_id} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-5">No items in your wishlist.</p>
                )}
            </div>
        </div>
    );
};

export default Wish;
