import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Cart } from ".";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-[60px] bg-white z-10">
      <div className="container mx-auto max-w-[1200px] h-full px-5 py-3 flex items-center justify-between">
        <Link href={"/"} className="font-bold text-lg">
          Shopping
        </Link>

        <div className="flex flex-col items-center font-medium">
          <FiShoppingBag />
          <span>Cart</span>
        </div>

        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
