import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Cart } from ".";
import { useStateContext } from "@/lib/context";
import { useState } from "react";

const Navbar = () => {
  const { sumTotalQuantity } = useStateContext();
  const [showTheCart, setShowTheCart] = useState(false);

  const closeShowThatCart = () => setShowTheCart(false);

  console.log(sumTotalQuantity);

  return (
    <nav className="fixed w-full h-[60px] bg-white z-10">
      <div className="container mx-auto max-w-[1200px] h-full px-5 py-3 flex items-center justify-between">
        <Link href={"/"} className="font-bold text-lg">
          Shopping
        </Link>

        <div
          className="flex flex-col items-center font-medium cursor-pointer relative"
          onClick={() => setShowTheCart(true)}
        >
          {sumTotalQuantity > 0 && (
            <div className="w-[15px] h-[15px] bg-pink-600 rounded-full flex items-center justify-center text-[10px] text-white p-1 absolute -right-1 -top-2">
              {sumTotalQuantity}
            </div>
          )}
          <FiShoppingBag />
          <span>Cart</span>
        </div>

        {/* {showCart && <Cart />} */}
        {showTheCart && <Cart close={closeShowThatCart} />}
      </div>
    </nav>
  );
};

export default Navbar;
