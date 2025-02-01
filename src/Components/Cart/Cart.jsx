import { useEffect, useState } from "react";
import { getallfavorites } from "../utils/utils";
import Gadget from "../Gadget/Gadget";


const Cart = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fbrt = getallfavorites()
        setProducts(fbrt)
    },[])
    return (
        <div>
            <h2 className="font-bold text-2xl">CART</h2>

            <div>
            <div className="w-3/4 grid grid-cols-3 gap-6 p-5">
                    {products.map((gadget) => (
                        <Gadget gadget={gadget} key={gadget.product_id} />
                    ))}
                </div>

            </div>


        </div>
    );
};

export default Cart;