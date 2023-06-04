import Image from "next/image";
import { useRouter } from "next/navigation";

const Products = ({ slug, title, price, image }) => {
  const imgUrl = image.data.attributes.formats.small.url;

  const router = useRouter();

  return (
    <div className="w-full md:w-[250px] p-3 bg-white rounded-md">
      <div className="relative w-full h-[200px]">
        <img
          src={imgUrl}
          alt={title}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <h2 className="text-md font-bold my-1">{title}</h2>
      <p className="font-medium">${price}</p>
      <button
        className="w-full bg-gradient-to-br from-gray-500 to-gray-700 p-1 my-2 text-center rounded-md text-white font-medium"
        onClick={() => router.push(`/product/${slug}`)}
      >
        View More
      </button>

      {/* <Image
        src={image.data.attributes.formats.small.url}
        width={100}
        height={100}
      /> */}
    </div>
  );
};

export default Products;
