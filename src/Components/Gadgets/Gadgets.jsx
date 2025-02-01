import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const categories = ["All Products", "Computers", "Phones", "Smart Watches", "Accessories"];

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    useEffect(() => {
        fetch("./productsData.json")
            .then((res) => res.json())
            .then((data) => setGadgets(data));
    }, []);

    const filteredProducts =
        selectedCategory === "All Products"
            ? gadgets
            : gadgets.filter((product) => product.category === selectedCategory);

    return (
        <div className="max-w-6xl mx-auto mt-80 py-10">
            <h2 className="text-center font-bold text-5xl mb-12">Explore Cutting-Edge Gadgets</h2>

            {/* Sidebar for Categories */}
            <div className="flex">
                <div className="w-1/4 bg-gray-100 p-5 mt-5 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category}
                                className={`p-2 rounded-lg cursor-pointer ${
                                    selectedCategory === category ? "bg-purple-500 text-white" : "bg-white"
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Grid */}
                <div className="w-3/4 grid grid-cols-3 gap-6 p-5">
                    {filteredProducts.map((gadget) => (
                        <Gadget gadget={gadget} key={gadget.product_id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
