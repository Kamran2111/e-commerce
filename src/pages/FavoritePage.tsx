import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStat } from "../store/store";
import { toggleFavorite } from "../store/slice/favoritesSlice";
import { Product } from "../store/slice/favoritesSlice";

const FavoritePage: React.FC = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector(
    (state: RootStat) => state.products.items
  ) as Product[];

  const favorites = useSelector(
    (state: RootStat) => state.favorites.favorite
  ) as number[];

  const handleFavoriteToggle = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const favoriteProducts: Product[] = allProducts.filter((product: Product) =>
    favorites.includes(product.id)
  );

  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Избранное
        </h2>
        {favoriteProducts.length === 0 ? (
          <p className="text-center text-gray-500">Нет избранных продуктов</p>
        ) : (
          <ul className="space-y-6">
            {favoriteProducts.map((product) => (
              <li
                key={product.id}
                className="border p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-semibold text-lg">{product.name}</p>
                  <button
                    onClick={() => handleFavoriteToggle(product.id)}
                    className="mt-2 inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    Удалить из избранного
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default FavoritePage;
