import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStat } from "../../store/store";
import {
  removeItem,
  clearProducts,
  updateProductCount,
} from "../../store/slice/cartSlice";
import { HiOutlineTrash } from "react-icons/hi";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/Button";
import Modal from "../../common/Modal";
import { FaCheckCircle } from "react-icons/fa";

const Cart: React.FC = () => {
  const { products, totalPrice } = useSelector((state: RootStat) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState<{
    id: number;
    size: string;
  } | null>(null);

  const handleRemoveItem = (product: { id: number; size: string }) => {
    setProductToRemove(product);
    dispatch(removeItem(product));
  };

  const handleBackSeeCollectionPage = () => {
    navigate("/коллекция");
  };

  const handleClearProducts = () => {
    dispatch(clearProducts());
    setIsModalOpen(true);
  };

  const handleDecrementCount = (id: number, size: string) => {
    dispatch(
      updateProductCount({
        id,
        size,
        count: -1,
      })
    );
  };

  const handleIncrementCount = (id: number, size: string) => {
    dispatch(
      updateProductCount({
        id,
        size,
        count: 1,
      })
    );
  };

  const handlePlaceOrder = (product: { id: number; size: string }) => {
    setProductToRemove(product);
    setIsOrderModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseOrderModal = () => {
    if (productToRemove) {
      dispatch(removeItem(productToRemove));
    }
    setIsOrderModalOpen(false);
  };

  return (
    <section className="pt-24 mb-16 md:mb-24 lg:mb-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Корзина</h3>
          <Button
            onClick={handleBackSeeCollectionPage}
            className="text-base md:text-lg"
          >
            Назад
          </Button>
        </div>

        {products.length === 0 ? (
          <h4 className="text-xl text-gray-700">Корзина пусто</h4>
        ) : (
          <>
            <ul className="space-y-6">
              {products.map((product) => {
                const price = Number(product.price);
                const totalPriceForProduct = price * product.count;

                return (
                  <li
                    key={`${product.id}-${product.size}`}
                    className="flex flex-col md:flex-row items-start gap-4 md:gap-6 lg:gap-8 border-b pb-4"
                  >
                    <TransformWrapper
                      initialScale={1}
                      minScale={0.5}
                      maxScale={3}
                      centerZoomedOut={true}
                      doubleClick={{ mode: "zoomIn" }}
                    >
                      {({ zoomIn, zoomOut, resetTransform }) => (
                        <div className="relative">
                          <TransformComponent>
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-md shadow-md mb-4 md:mb-0 cursor-pointer"
                            />
                          </TransformComponent>
                          <div className="absolute top-0 right-0 p-2 flex gap-2">
                            <button
                              onClick={() => zoomIn()}
                              className="bg-white p-1 rounded shadow-md hover:bg-gray-100 transition"
                            >
                              +
                            </button>
                            <button
                              onClick={() => zoomOut()}
                              className="bg-white p-1 rounded shadow-md hover:bg-gray-100 transition"
                            >
                              -
                            </button>
                            <button
                              onClick={() => resetTransform()}
                              className="bg-white p-1 rounded shadow-md hover:bg-gray-100 transition"
                            >
                              <HiOutlineTrash />
                            </button>
                          </div>
                        </div>
                      )}
                    </TransformWrapper>
                    <div className="flex flex-col justify-between w-full">
                      <div className="mb-2">
                        <p className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                          {product.name}
                        </p>
                        <p className="hidden md:block text-sm md:text-base lg:text-lg text-gray-600">
                          {product.title}
                        </p>

                        {product.size && (
                          <p className="text-xs md:text-sm lg:text-base text-gray-500 mb-2">
                            Размер: {product.size}
                          </p>
                        )}
                        <p className="text-xs md:text-sm lg:text-base text-gray-500">
                          Цена: ${price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
                          <div className="flex items-center border-2 border-gray-300 rounded-md">
                            <button
                              className="flex items-center justify-center border-r-2 border-gray-300 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
                              onClick={() =>
                                handleDecrementCount(product.id, product.size!)
                              }
                            >
                              <span className="text-base md:text-lg font-semibold">
                                -
                              </span>
                            </button>
                            <p className="text-xs md:text-base lg:text-lg font-medium px-1 md:px-2">
                              {product.count}
                            </p>
                            <button
                              className="flex items-center justify-center border-l-2 border-gray-300 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
                              onClick={() =>
                                handleIncrementCount(product.id, product.size!)
                              }
                            >
                              <span className="text-base md:text-lg font-semibold">
                                +
                              </span>
                            </button>
                          </div>
                          <p className="font-semibold text-sm md:text-lg lg:text-xl text-gray-800">
                            Итоговая цена: ${totalPriceForProduct.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex gap-4 items-center">
                          <button
                            className="text-xs md:text-sm lg:text-base text-red-600 hover:text-red-800 font-semibold transition-colors duration-200"
                            onClick={() =>
                              handleRemoveItem({
                                id: product.id,
                                size: product.size as string,
                              })
                            }
                          >
                            Удалить
                          </button>
                          <button
                            onClick={() => handlePlaceOrder(product)}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                          >
                            <span>Заказать</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 font-bold text-xl text-gray-800">
              Итоговая цена: ${totalPrice.toFixed(2)}
            </p>
            <div className="mt-4 flex gap-4">
              <Button
                onClick={handleClearProducts}
                className="text-base md:text-lg"
              >
                Очистить корзину
              </Button>
            </div>
          </>
        )}
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Корзина очищена"
        >
          <p className="flex items-center gap-3 text-lg text-gray-700">
            <FaCheckCircle className="w-[50px] h-[50px] text-green-700" />{" "}
            Корзина успешно очищена!
          </p>
          <Button className="text-lg" onClick={handleCloseModal}>
            Ок
          </Button>
        </Modal>
      )}

      {isOrderModalOpen && (
        <Modal
          isOpen={isOrderModalOpen}
          onClose={handleCloseOrderModal}
          title="Заказ оформлен"
        >
          <p className="flex items-center gap-3 text-lg text-gray-700">
            <FaCheckCircle className="w-[50px] h-[50px] text-green-700" /> Заказ
            успешно оформлен!
          </p>
          <Button className="text-lg" onClick={handleCloseOrderModal}>
            Ок
          </Button>
        </Modal>
      )}
    </section>
  );
};

export default Cart;
