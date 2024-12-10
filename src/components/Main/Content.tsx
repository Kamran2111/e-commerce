import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const handleSeeCollectionPage = () => {
    navigate("/коллекция", { replace: true });
  };

  return (
    <section className="relative h-screen">
      <div className="bg-custom-img relative h-screen sm:h-screen object-center bg-cover bg-center bg-no-repeat"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-black/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white uppercase font-montserrat">
            Предосенняя мужская коллекция 2024
          </h1>
          <p className="text-xs md:text-sm lg:text-base font-medium text-white mt-2 lg:mt-4 mb-4">
            Новая коллекция для мужчин включает в себя модные футболки, удобные
            сумки и стильные джинсы
          </p>
          <button
            onClick={handleSeeCollectionPage}
            className="transition-transform duration-300 transform hover:scale-105 uppercase bg-blue-950 p-3 md:p-4 lg:p-5 rounded-md text-base md:text-lg lg:text-xl text-white"
          >
            Посмотреть Коллекцию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
