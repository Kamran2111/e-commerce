const SeeCollectionContent = () => {
  return (
    <section className="relative">
      <div className="h-[70vh] sm:h-screen  bg-cover bg-center bg-no-repeat">
        <img src="/src/assets/images/collection-image.jpg" alt="img" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg text-center max-w-lg mx-4">
          <p className="text-sm sm:text-base font-medium text-white mt-2 leading-relaxed font-montserrat uppercase pb-4">
            Эта коллекция сочетает в себе стиль и комфорт, предлагая идеальные
            наряды для любого сезона.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeeCollectionContent;
