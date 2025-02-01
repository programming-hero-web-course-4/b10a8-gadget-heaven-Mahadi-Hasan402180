import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { addFavorite } from "../utils/utils";

const GadgetDetails = () => {
    const { product_id } = useParams();
    const id = parseInt(product_id);
    const data = useLoaderData();
    const product = data.find((product) => product.product_id === id);
    
    const { product_image, product_title, price, description, specification, availability, rating } = product;

    // States for cart and wishlist separately
    const [cartAdded, setCartAdded] = useState(false);
    const [wishlistAdded, setWishlistAdded] = useState(false);

    // Handle Add to Cart
    const handleAddToCart = () => {
        if (!cartAdded) {
            console.log(`${product_title} added to cart`);
            setCartAdded(true);
            addFavorite(product);
        }
    };

    // Handle Add to Wishlist
    const handleAddToWishlist = () => {
        if (!wishlistAdded) {
            console.log(`${product_title} added to wishlist`);
            setWishlistAdded(true);
            addFavorite(product);
        }
    };

    return (
        <div className="mb-96">
            {/* Header Section */}
            <div className="text-center mt-2 relative bg-[#9538E2] p-8 h-80 text-white">
                <h2 className="font-bold text-5xl">Product Details</h2>
                <p className="mt-2 text-base">
                    Explore the latest gadgets that will take your experience to the next level.
                </p>
            </div>

            {/* Product Details Section */}
            <div className="max-w-4xl mx-auto mt-10 p-6 absolute top-[35%] right-56 bg-fuchsia-100 shadow-lg rounded-lg flex gap-6">
                <img src={product_image} alt={product_title} className="w-64 h-64 rounded-lg object-cover" />

                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">{product_title}</h2>
                        <p className="text-xl text-gray-700 mt-2">Price: <span className="font-bold">${price}</span></p>
                        <p className="text-green-500 font-semibold mt-1">{availability}</p>
                        <p className="mt-3 text-gray-600">{description}</p>

                        <div className="mt-4">
                            <h3 className="font-semibold text-lg">Specification:</h3>
                            <ul className="list-disc ml-5 mt-2 text-gray-600">
                                {specification.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <h2 className="font-bold">Rating <span className="text-yellow-500 text-xl">⭐</span></h2>
                        <div className="flex items-center mt-4">
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <span className="ml-2 text-gray-700 font-semibold">{rating}</span>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex items-center gap-4 mt-5">
                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            disabled={cartAdded}
                            className={`px-5 py-2 rounded-lg flex items-center gap-2 ${cartAdded ? "bg-gray-400" : "bg-purple-500 text-white"}`}
                        >
                            🛒 {cartAdded ? "Added to Cart" : "Add to Cart"}
                        </button>

                        {/* Add to Wishlist Button */}
                        <button
                            onClick={handleAddToWishlist}
                            disabled={wishlistAdded}
                            className={`px-5 py-2 rounded-lg flex items-center gap-2 ${wishlistAdded ? "bg-gray-400" : "bg-red-500 text-white"}`}
                        >
                            ♥ {wishlistAdded ? "Added to Wishlist" : "Add to Wishlist"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
