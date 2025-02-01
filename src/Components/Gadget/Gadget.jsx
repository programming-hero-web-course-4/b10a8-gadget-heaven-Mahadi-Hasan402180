import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, price } = gadget;

    return (
        <div key={product_id} className="bg-purple-50  p-4 rounded-lg shadow-md">
            <img src={product_image} alt={product_title} className="w-full h-48 rounded-lg" />
            <h3 className="text-lg font-bold mt-2">{product_title}</h3>
            <p className="text-gray-500">Price: ${price}</p>

            <Link to={`products/${product_id}`}>
            <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg">
                View Details
            </button>
            </Link>
        </div>
    );
};

export default Gadget;
