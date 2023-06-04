import { useStateContext } from "@/lib/context";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Cart = ({ close }) => {
  const { cartItems, setShowCart } = useStateContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full h-full left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)]"
      onClick={close}
    >
      <motion.div
        animate={{ opacity: 1, x: 0, scale: 1 }}
        initial={{ opacity: 0, x: 200, scale: 0 }}
        className="fixed right-0 w-[40%] h-full bg-[#f1f1f1] p-10 md:p-20"
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold mb-10">
              You have more shopping to do 🛒😊
            </h1>
            <FaShoppingCart size={150} color="#444" />
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <div className="w-full h-[150px] bg-white rounded-md p-5 my-4 flex items-start justify-between">
                <img
                  src={item.image.data.attributes.formats.small.url}
                  alt=""
                  className="w-[150px] h-[100px] object-cover"
                />
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <h3>{item.price}</h3>
                  <span className="mr-4">Quantity</span>
                  <div className="flex items-center justify-center my-2">
                    <button>
                      <AiFillMinusCircle size={20} />
                    </button>
                    <span className="mx-3">0</span>
                    <button>
                      <AiFillPlusCircle size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default Cart;
