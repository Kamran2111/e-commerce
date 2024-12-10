import { useMemo, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStat } from "../store/store";
import { fetchCollectionProducts } from "../store/slice/operations";
import { Products } from "../types/productsType";
import ExpandableText from "../components/Main/ExpanableText";
import Spinner from "../common/Spinner";
import CustomErrorMessage from "../common/Error";
import { Link } from "react-router-dom";
import SeeCollectionContent from "../components/Main/SeeCollectionContent";
import LazyLoad from "react-lazyload";
import { toggleFavorite } from "../store/slice/favoritesSlice";
import { RiHeartAdd2Line } from "react-icons/ri";
import { RxHeartFilled } from "react-icons/rx";
import { motion } from "framer-motion";

const SeeCollection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [category, setCategory] = useState<string>("");
  const { items, error, isLoading } = useSelector(
    (state: RootStat) => state.products
  );
  const favorites = useSelector((state: RootStat) => state.favorites.favorite);

  useEffect(() => {
    dispatch(fetchCollectionProducts());
  }, [dispatch]);

  const handleFilteredCategory = useMemo(() => {
    if (category === "") {
      return items as Products[];
    }
    return (items as Products[]).filter(
      (product) => product.category === category
    );
  }, [items, category]);
  const handleCategoryChange = useCallback((selectedCategory: string) => {
    setCategory(selectedCategory);
  }, []);

  return (
    <section>
      {isLoading && <Spinner />}
      {error && (
        <CustomErrorMessage
          name="Продукт"
          message="Ошибка загрузки информации о продукте"
        />
      )}
      <SeeCollectionContent />

      <div className="text-center m-10">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-4 border-gray-500">
          Коллекция
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => handleCategoryChange("")}
            className={`px-4 py-2 rounded transition-colors ${
              category === ""
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            Все
          </button>
          <button
            onClick={() => handleCategoryChange("tshirt")}
            className={`px-4 py-2 rounded transition-colors ${
              category === "tshirt"
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            Футболка
          </button>
          <button
            onClick={() => handleCategoryChange("jeans")}
            className={`px-4 py-2 rounded transition-colors ${
              category === "jeans"
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            Джинсы
          </button>
          <button
            onClick={() => handleCategoryChange("bag")}
            className={`px-4 py-2 rounded transition-colors ${
              category === "bag"
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            Сумки
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {items && items.length > 0 ? (
            handleFilteredCategory.map((product) => {
              const isFavorite = favorites.includes(product.id);

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
                  className="relative flex flex-col items-center bg-white p-4 rounded shadow transition-transform duration-200 transform hover:scale-300 hover:shadow-lg"
                  key={product.id}
                >
                  <Link to={`/продукт/${product.id}`} className="block">
                    <LazyLoad height={200} offset={100}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-[200px] object-cover transition-transform duration-500"
                        loading="lazy"
                      />
                    </LazyLoad>
                  </Link>
                  <button
                    className="absolute top-4 right-4"
                    onClick={() => dispatch(toggleFavorite(product.id))}
                  >
                    {isFavorite ? (
                      <RxHeartFilled className="text-xl" />
                    ) : (
                      <RiHeartAdd2Line className="text-xl" />
                    )}
                  </button>
                  <p className="font-bold mt-3 mb-2 text-center uppercase border-b-2 border-gray-300">
                    {product.name}
                  </p>
                  <div className="text-center mb-2">
                    <ExpandableText text={product.title} />
                  </div>
                  <p className="text-gray-600">${product.price}</p>
                </motion.li>
              );
            })
          ) : (
            <p>Нет доступных продуктов</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default SeeCollection;
