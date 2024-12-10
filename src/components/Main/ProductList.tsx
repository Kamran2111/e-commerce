import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/operations";
import ProductItem from "./ProductItem";
import Spinner from "../../common/Spinner";
import CustomErrorMessage from "../../common/Error";
import { AppDispatch, RootStat } from "../../store/store";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, error, isLoading } = useSelector(
    (state: RootStat) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="text-center p-4 md:p-6 lg:p-8">
      {isLoading && <Spinner />}
      {error && (
        <CustomErrorMessage
          name="Продукт"
          message="Ошибка загрузки информации о продукте"
        />
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12 mb-6 border-b-4 border-gray-500">
        Коллекция
      </h2>

      <ul className="flex flex-wrap gap-6 p-4 md:p-6 items-center justify-center">
        {items && items.length > 0 ? (
          items.map((item) => <ProductItem key={item.id} product={item} />)
        ) : (
          <p className="text-lg md:text-xl">Нет доступных продуктов</p>
        )}
      </ul>
    </section>
  );
};

export default ProductList;
