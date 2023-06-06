import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // Add our data for the state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [sumTotalQuantity, setSumTotalQuantity] = useState(0);

  //   Increase Quantity
  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  //   Decrease Quantity
  const decreaseQuantity = () => {
    setQuantity((prevState) => {
      if (prevState - 1 < 1) return 1;

      return prevState - 1;
    });
  };

  //   Add product to cart
  const onAdd = (product, totalQuantity) => {
    // Increase Sum of Total Quantity
    setSumTotalQuantity((prevState) => prevState + totalQuantity);

    // Check if the product is already in the cart
    const itemAlreadyExist = cartItems.find(
      (item) => item.slug === product.slug
    );

    if (itemAlreadyExist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? {
                ...itemAlreadyExist,
                totalQuantity: itemAlreadyExist.totalQuantity + totalQuantity,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, totalQuantity: totalQuantity },
      ]);
    }
  };

  //   Remove product in cart
  const onRemove = (product) => {
    // Decrease Sum of Total Quantity
    setSumTotalQuantity((prevState) => prevState - 1);

    // Check if the product is already in the cart
    const itemAlreadyExist = cartItems.find(
      (item) => item.slug === product.slug
    );

    console.log(itemAlreadyExist);

    if (itemAlreadyExist.totalQuantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? {
                ...itemAlreadyExist,
                totalQuantity: itemAlreadyExist.totalQuantity - 1,
              }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
        sumTotalQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
