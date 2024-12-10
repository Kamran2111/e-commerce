import QRCode from "qrcode.react";
import imgAbout from "../assets/images/aboutUs-img.jpg";
import Spinner from "../common/Spinner";
import CustomErrorMessage from "../common/Error";
import { useSelector } from "react-redux";
import { RootStat } from "../store/store";

const AboutUs = () => {
  const url = "https://www.instagram.com/5_recebov_5/";
  const { error, isLoading } = useSelector((state: RootStat) => state.products);
  return (
    <section className="pt-16 px-4 md:px-8 lg:px-16 m-4 md:m-8 lg:m-10 bg-gray-100">
      {isLoading && <Spinner />}
      {error && (
        <CustomErrorMessage
          name="Иноформация"
          message="Ошибка загрузки информации"
        />
      )}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          О нас
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8">
          Добро пожаловать в наш интернет-магазин! Мы стремимся предоставить вам
          самые качественные товары и услуги. Наша миссия — предложить широкий
          ассортимент тщательно отобранных товаров, которые соответствуют самым
          высоким стандартам качества и ценности. Мы верим в создание
          бесперебойного шоппинга, который будет и приятным, и удовлетворяющим
          для наших клиентов.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <img
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          src={imgAbout}
          alt="Изображение, связанное с нашим магазином"
        />
      </div>
      <div className="mt-10 max-w-4xl mx-auto text-center">
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4">
          Наша команда преданных делу профессионалов ежедневно работает над тем,
          чтобы вы могли наслаждаться лучшими покупками. Мы тщательно следим за
          последними модными трендами и предлагаем только актуальные и
          востребованные товары.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8">
          Мы уверены, что наш магазин станет для вас любимым местом для покупок,
          где вы всегда найдете что-то новое и интересное. Спасибо, что выбрали
          нас!
        </p>
        <div className="mt-10 flex flex-col items-center">
          <QRCode value={url} size={128} />
          <p className="text-sm text-gray-500 mt-2">
            Сканируйте QR-код, чтобы посетить наш сайт
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
