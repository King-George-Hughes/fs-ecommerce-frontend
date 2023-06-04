"use client";

import { useQuery } from "urql";
import { PRODUCT_QUERY } from "@/lib/query";
import { Products } from "@/components";

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p className="text-3xl">Loading...</p>;
  if (error) return <p className="text-2xl">Oh no... {error.message}</p>;
  // else console.log(data);
  // console.log(results);
  const products = data.products.data;
  console.log(products);

  return (
    <main className="bg-gray-200 flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-10">Online Shopping</h1>

      <div className="w-full flex items-center justify-start flex-col gap-5 md:flex-row md:flex-wrap">
        {products.map((product) => {
          return (
            <Products key={product.attributes.slug} {...product.attributes} />
          );
        })}
      </div>
    </main>
  );
}
