import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Cart } from ".";
import { useStateContext } from "@/lib/context";
import { useState } from "react";

const Navbar = () => {
  //   const [showCart, setShowCart] = useStateContext();
  const [showTheCart, setShowTheCart] = useState(false);

  const closeShowThatCart = () => setShowTheCart(false);

  return (
    <nav className="fixed w-full h-[60px] bg-white z-10">
      <div className="container mx-auto max-w-[1200px] h-full px-5 py-3 flex items-center justify-between">
        <Link href={"/"} className="font-bold text-lg">
          Shopping
        </Link>

        <div
          className="flex flex-col items-center font-medium cursor-pointer"
          onClick={() => setShowTheCart(true)}
        >
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
