"use client";

import { useQuery } from "urql";
import { GET_PRODUCT_DETAIL_QUERY } from "@/lib/query";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

import { useStateContext } from "@/lib/context";

const ProductDetails = ({ params }) => {
  const [fullPicture, setFullPicture] = useState(false);

  // Importing quantity from ShopContext
  const { quantity, increaseQuantity, decreaseQuantity, onAdd } =
    useStateContext();
  console.log(quantity);

  const slugParam = params.slug;
  const [results] = useQuery({
    query: GET_PRODUCT_DETAIL_QUERY,
    variables: { slug: slugParam },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p className="text-3xl">Loading...</p>;
  if (error) return <p className="text-2xl">Oh no... {error.message}</p>;

  const { title, description, price, image } = data.products.data[0].attributes;
  const imgUrl = image.data.attributes.formats.large.url;
  // console.log(image.data.attributes.formats);

  return (
    <main className="bg-gray-200 flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1 className="text-4xl font-bold mb-10">Online Shopping</h1> */}

      <div className="container max-w-[1200px] mx-auto">
        <div className="w-full flex items-center justify-center flex-col gap-10 md:gap-40 md:flex-row">
          <div className="w-full md:w-[500px]">
            <img
              src={imgUrl}
              alt={title}
              className="w-full cursor-pointer"
              onClick={() => setFullPicture((prevState) => (prevState = true))}
            />
          </div>
          <div className="w-full md:w-[500px]">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-md">{description}</p>
            <p className="flex items-center justify-start mt-3">
              <span className="mr-4">Quantity</span>
              <button onClick={decreaseQuantity}>
                <AiFillMinusCircle size={20} />
              </button>
              <span className="mx-3">{quantity}</span>
              <button onClick={increaseQuantity}>
                <AiFillPlusCircle size={20} />
              </button>
            </p>
            <button
              className="bg-black text-white w-full px-5 py-2 mt-5"
              onClick={() => onAdd(data.products.data[0].attributes, quantity)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      {fullPicture && (
        <div className="">
          <div
            className="fixed w-full h-full left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.9)] backdrop-blur-md z-20"
            onClick={() => setFullPicture((prevState) => (prevState = false))}
          ></div>
          <img
            src={imgUrl}
            alt={title}
            className="fixed w-[90%] h-fit top-[5%] bottom-[5%] left-1/2 right-1/2 transform -translate-x-1/2 z-30"
          />
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
