import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../types/productsType";
import axios from "axios";
import ExpandableText from "../components/Main/ExpanableText";
import Spinner from "../common/Spinner";
import CustomErrorMessage from "../common/Error";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/slice/cartSlice";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { RootStat } from "../store/store";
import { Button } from "../common/Button";
axios.defaults.baseURL = "https://api-products-v604.onrender.com";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Products | null>(null);
  const [, setItems] = useState<Products[]>([]);
  const [size, setSize] = useState<string>("");
  const { isLoading, error } = useSelector((state: RootStat) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/productsCollection/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Ошибка загрузки продукта:", error);
      }
    };

    async function fetchItems() {
      try {
        const response = await axios.get(`/productsCollection`);
        setItems(response.data);
      } catch (error) {
        console.error("Ошибка загрузки списка продуктов:", error);
      }
    }

    fetchProduct();
    fetchItems();
  }, [id]);

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value);
  };

  const handleBackSeeCollectionPage = () => {
    navigate("/коллекция");
  };

  const handleAddProduct = (product: Products) => {
    dispatch(
      addProduct({
        id: product.id,
        name: product.name,
        title: product.title,
        price: product.price,
        image: product.image,
        imageTwo: product.imageTwo,
        count: 1,
        totalPrice: product.price,
        size,
        category: product.category,
      })
    );
  };

  if (!product) return <p>Ошибка загрузки продукта</p>;

  const sizeOptions =
    product.category === "tshirt" || product.category === "jeans" ? (
      <select
        name="Size"
        onChange={handleSizeChange}
        value={size}
        className="mt-3 p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
      >
        <option value="">Выберите размер</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    ) : null;

  return (
    <>
      <section className="pt-16 px-4 sm:px-6 lg:px-8 m-10">
        {isLoading && <Spinner />}
        {error && (
          <CustomErrorMessage
            name="Продукт"
            message="Ошибка загрузки информации о продукте"
          />
        )}
        <Button onClick={handleBackSeeCollectionPage}>Назад</Button>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 m-10">
          <div className="w-full lg:w-1/2">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: false }}
              navigation
              modules={[Pagination, Navigation]}
              className="md:w-[400px] h-[550px] lg:h-full"
            >
              <SwiperSlide>
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full md:w-[400px] h-[550px]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={product.imageTwo}
                  alt={product.name}
                  className="object-cover w-[400px] h-[550px]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <p className="font-bold md:text-lg text-sm lg:text-xl mb-3 uppercase">
              {product.name}
            </p>
            <div className="mt-3 mb-4 text-center lg:text-left">
              <ExpandableText text={product.title} />
            </div>
            <p className="text-gray-600 text-lg mb-4">${product.price}</p>
            {sizeOptions}
            <button
              className="mt-4 flex items-center md:text-lg sm:text-xs text-blue-600 hover:text-blue-800 transition-colors duration-300 transform hover:scale-110"
              onClick={() => handleAddProduct(product)}
            >
              <MdOutlineAddShoppingCart className="mr-2" />
              Добавить в корзину
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
