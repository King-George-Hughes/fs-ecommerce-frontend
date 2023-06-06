import { useStateContext } from "@/lib/context";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { cartVariantParent, cartVariant } from "@/lib/motion";

const Cart = ({ close }) => {
  const { cartItems, onAdd, onRemove, totalPrice } = useStateContext();

  console.log(cartItems);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full h-full left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)]"
      onClick={close}
    >
      <motion.div
        animate={{ opacity: 1, x: "0%", scale: 1 }}
        initial={{ opacity: 0, x: "100%", scale: 0 }}
        exit={{ x: "100%" }}
        // transition={{ type: "tween" }}
        // transition={{ type: "spring" }}
        className="fixed right-0 w-[80%] h-full bg-[#f1f1f1] p-10 md:w-[40%] md:p-20 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <h1 className="text-md md:text-lg font-bold mb-10">
              You have more shopping to do 🛒😊
            </h1>
            <FaShoppingCart size={150} color="#444" />
          </motion.div>
        )}
        <motion.div
          layout
          variants={cartVariantParent}
          initial="hidden"
          animate="show"
        >
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <motion.div
                  layout
                  variants={cartVariant}
                  // initial="hidden"
                  // animate="show"
                  // transition={{ delay: 0.4 }}
                  className="w-full h-[100px] md:h-[150px] bg-white rounded-md p-5 my-4 flex items-start justify-between"
                  key={item.slug}
                >
                  <img
                    src={item.image.data.attributes.formats.small.url}
                    alt=""
                    className="w-[90px] md:w-[120px] h-[60px] md:h-[100px] object-cover"
                  />
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <h3 className="text-sm md:text-lg font-bold">
                      {item.title}
                    </h3>
                    <h3 className="text-sm md:text-md">${item.price}</h3>
                    <div className="flex items-center justify-center my-0 md:my-2">
                      <span className="text-sm md:text-md mr-4">Quantity</span>
                      <button onClick={() => onRemove(item)}>
                        <AiFillMinusCircle size={20} />
                      </button>
                      <span className="mx-1 md:mx-3">{item.totalQuantity}</span>
                      <button onClick={() => onAdd(item, 1)}>
                        <AiFillPlusCircle size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          {cartItems.length >= 1 && (
            <motion.div variants={cartVariant}>
              <h3 className="font-medium text-lg mt-8">
                Subtotal: <span className="text-green-600">${totalPrice}</span>
              </h3>
              <button className="w-full bg-black text-white font-medium p-2 mt-5 rounded-sm">
                Purchase
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cart;
