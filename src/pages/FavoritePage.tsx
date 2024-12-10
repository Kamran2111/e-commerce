import { useDispatch, useSelector } from "react-redux";
import { RootStat } from "../store/store";
import { toggleFavorite } from "../store/slice/favoritesSlice";
import { Product } from "../store/slice/favoritesSlice";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";

const FavoritePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProducts = useSelector(
    (state: RootStat) => state.products.items
  ) as Product[];

  const favorites = useSelector(
    (state: RootStat) => state.favorites.favorite
  ) as number[];
  const handleFavoriteToggle = (id: number) => {
    dispatch(toggleFavorite(id));
  };
  const handleBackSeeCollectionPage = () => {
    navigate("/коллекция");
  };
  const favoriteProducts: Product[] = allProducts.filter((product: Product) =>
    favorites.includes(product.id)
  );

  return (
    <section className="mt-20 mb-20 px-4 sm:px-6 lg:px-8">
      <Button
        onClick={handleBackSeeCollectionPage}
        className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
      >
        Назад
      </Button>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Избранное
        </h2>
        {favoriteProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Нет избранных продуктов
          </p>
        ) : (
          <ul className="space-y-6">
            {favoriteProducts.map((product) => (
              <li
                key={product.id}
                className="border border-gray-300 bg-white p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[300px] h-[350px]object-cover rounded-md"
                />
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-semibold text-lg mb-2">{product.name}</p>
                  <button
                    onClick={() => handleFavoriteToggle(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
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
