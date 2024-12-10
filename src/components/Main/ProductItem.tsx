import LazyLoad from "react-lazyload";
import ExpandableText from "./ExpanableText";
import { Products } from "../../types/productsType";
import useHoverImage from "../../hooks/useHoverImage";
import { motion } from "framer-motion";

interface ProductItemProps {
  product: Products;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { currentImage, handleMouseEnter, handleMouseLeave } = useHoverImage(
    product.image,
    product.imageTwo as string
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.1,
        ease: [0.42, 0, 0.58, 1],
        delay: 0.1,
      }}
      className="flex flex-col items-center mb-12 w-80 transition-transform
      duration-500 transform hover:scale-105 hover:shadow-lg"
      key={product.id}
    >
      <LazyLoad height={300} offset={100}>
        <img
          src={currentImage}
          alt={product.title}
          className="w-full h-[300px] object-cover transition-transform duration-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </LazyLoad>
      <p className="font-bold mt-3 pb-2 uppercase text-center text-lg border-b border-gray-300">
        {product.name}
      </p>
      <div className="mt-3 pb-2 text-center">
        <ExpandableText text={product.title} />
      </div>
      <p className="text-gray-600 pt-1 text-lg">${product.price}</p>
    </motion.li>
  );
};

export default ProductItem;
