import express from "express";
import cors from "cors";

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

const productsCollection = [
    {
      id: "1",
      name: "Нейлоновая мини-сумка",
      title:
        "Мини-сумка через плечо с мягким дизайном. Изготовлена ​​из технической ткани. Одно отделение с магнитным передним клапаном. Регулируемый плечевой ремень",
      price: "39.00",
      category: "bag",
      image:
        "https://static.zara.net/assets/public/74e7/565e/dda94099b761/b380e2284923/13906420800-e1/13906420800-e1.jpg?ts=1722414313493&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/ffe7/fffe/2ea343db958d/920711e28e0a/13906420800-e3/13906420800-e3.jpg?ts=1722414314396&w=350",
    },
    {
      id: "2",
      name: "ПРОСТАЯ НЕСОСНАЯ СУМКА",
      title:
        "Основное отделение на молнии. Внутри небольшой карман на молнии. Передний карман на молнии. Ручка с одной стороны.",
      price: "55.00",
      category: "bag",
      image:
        "https://static.zara.net/assets/public/0a38/a280/53cf4e66ba03/f460d71f6cdd/13702420800-e1/13702420800-e1.jpg?ts=1722351485045&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/de90/4529/d5754d5080ed/c53d55afd9d5/13702420800-e2/13702420800-e2.jpg?ts=1722351498031&w=450",
    },
    {
      id: "3",
      name: "Прорезиненный рюкзак",
      title:
        "Рюкзак с прорезиненной отделкой. Основное отделение закрывается на молнию. Внутри есть небольшой карман на молнии. Спереди есть карман среднего размера на молнии. Плоские карманы по бокам.",
      price: "129.00",
      category: "bag",
      image:
        "https://static.zara.net/assets/public/b1a5/9c36/01c44dbb80e1/9ed6687c549e/13216420800-e1/13216420800-e1.jpg?ts=1722356340056&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/8f62/8ad3/5fc74afbac4c/a43d8de59285/13216420800-e3/13216420800-e3.jpg?ts=1722356330181&w=550",
    },
    {
      id: "4",
      name: "РЮКЗАК С ТИСНЕНЫМ ТИСНЕНИЕМ",
      title:
        "Рюкзак с тиснением. Полужесткая конструкция. Основное отделение с застежкой-молнией и небольшим внутренним карманом. Карман на молнии среднего размера спереди. Мягкая спинка с ремешком для крепления к чемоданам. Верхняя ручка и два",
      price: "139.00",
      category: "bag",
      image:
        "https://static.zara.net/assets/public/1987/7dea/da664c098bdd/84c04171141a/13209420800-e2/13209420800-e2.jpg?ts=1722351493989&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/8b5e/f0fa/3e054c948335/c208003e91bf/13209420800-e4/13209420800-e4.jpg?ts=1722351503950&w=350",
    },
    {
      id: "5",
      name: "ОБЫЧНЫЙ ДОРОЖНЫЙ ЧЕМОДАН",
      title:
        "Дорожный чемодан. Основное отделение на молнии. Большое внутреннее пространство с боковым карманом на молнии. Передний карман с магнитной застежкой. Регулируемый и съемный плечевой ремень.",
      price: "159.00",
      category: "bag",
      image:
        "https://static.zara.net/assets/public/eadb/9487/7af0485fba44/69b71a49d49a/13107420800-e1/13107420800-e1.jpg?ts=1722351481852&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/0e74/1d5c/3c764f6292b7/29ad467f1c72/13107420800-e3/13107420800-e3.jpg?ts=1722351497585&w=350",
    },
    {
      id: "12",
      name: "Футболка STWD с узором",
      title:
        "Подготовьтесь к приключениям в этой универсальной футболке, которая сочетает в себе смелый дизайн и высокое качество. Она идеально подходит как для активного отдыха, так и для повседневных выходов.",
      price: "70.00",
      category: "tshirt",
      image:
        "https://static.pullandbear.net/assets/public/0c4a/f6b2/f8a5436fa4d4/1248ed0772a5/07249521800-A1M/07249521800-A1M.jpg?ts=1720715862422&w=350",
      imageTwo:
        "https://static.pullandbear.net/assets/public/edc1/7bba/d5484a0cb8ef/905abc07f592/07249521800-A7M/07249521800-A7M.jpg?ts=1721732860213&w=350",
    },
    {
      id: "13",
      name: "Футболка с коротким рукавом Metallica",
      title:
        "Стильная футболка с ярким принтом, отражающим динамичную атмосферу городской жизни. Идеальный выбор для тех, кто ценит удобство и модный вид одежды.",
      price: "65.00",
      category: "tshirt",
      image:
        "https://static.pullandbear.net/assets/public/9b79/e5af/ea6843ac923d/46faf1fd547e/07248914251-A1M/07248914251-A1M.jpg?ts=1721639829092&w=350",
      imageTwo:
        "https://static.pullandbear.net/assets/public/2bae/5684/a3884ab791c3/0169b080695b/07248914251-A2M/07248914251-A2M.jpg?ts=1721639843076&w=350",
    },
    {
      id: "14",
      name: "Футболка El Parrillero",
      title:
        "Эта футболка изготовлена из экологически чистых материалов и воплощает принципы устойчивой моды. Простой, но элегантный дизайн делает её отличным выбором для тех, кто заботится о окружающей среде.",
      price: "43.00",
      category: "tshirt",
      image:
        "https://static.pullandbear.net/assets/public/c9f7/08f3/153444bfa0ec/8dcc4ed2db2e/07249560802-A1M/07249560802-A1M.jpg?ts=1721639855864&w=350",
      imageTwo:
        "https://static.pullandbear.net/assets/public/ca18/9947/706e4045852e/8ba4e6d58113/07249560802-A2M/07249560802-A2M.jpg?ts=1721639853282&w=350",
    },
    {
      id: "15",
      name: "Футболка Hokusai ‘Shichirigahama’",
      title:
        "Эта черная футболка 'Горный Пик' идеально подходит для любителей приключений и активного отдыха. Простой, но стильный дизайн с изображением заснеженных гор придаст вашему образу силу и уверенность.",
      price: "63.00",
      category: "tshirt",
      image:
        "https://static.pullandbear.net/assets/public/d27f/c4a6/53b74a7a92f7/87398b1b0d0d/07249922800-A1M/07249922800-A1M.jpg?ts=1721640082742&w=350",
      imageTwo:
        "https://static.pullandbear.net/assets/public/7303/fe84/e1414a04b34d/ed9b4ac372d8/07249922800-A2M/07249922800-A2M.jpg?ts=1721640087985&w=350",
    },
    {
      id: "17",
      name: "РУБАШКА ИЗ ЖАККАРДОВОГО УЗОРА",
      title:
        "Рубашка свободного кроя из смеси вискозы и хлопка. Воротник-стойка и короткие рукава. Застежка на пуговицы спереди.",
      price: "93.00",
      category: "tshirt",
      image:
        "https://static.zara.net/assets/public/94d0/cb47/5329463097e6/60a23e98ba3e/01618475800-e1/01618475800-e1.jpg?ts=1718034575352&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/debf/8c44/23984b728e81/9e333fba61ed/01618475800-e2/01618475800-e2.jpg?ts=1718034577144&w=350",
    },
    {
      id: "20",
      name: "Узкие укороченные джинсы.",
      title:
        "Эти узкие укороченные джинсы идеально сочетают в себе современный стиль и комфорт. Они оснащены пятью карманами и имеют эффект выцветания, придающий им уникальный и модный вид",
      price: "79.00",
      category: "jeans",
      image:
        "https://static.zara.net/assets/public/1a45/5d27/6f454aebbff8/f3f8ed2a8124/08062305406-e1/08062305406-e1.jpg?ts=1720708349768&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/3811/1425/ff494010b82a/d152c4e9edeb/08062305406-e2/08062305406-e2.jpg?ts=1720708349193&w=350",
    },
    {
      id: "21",
      name: "Рваные выцветшие джинсы",
      title:
        "Выцветшие мешковатые джинсы с разрывами и потертостями на штанинах, пятикарманный дизайн и застежка на молнию и пуговицы спереди.",
      price: "89.00",
      category: "jeans",
      image:
        "https://static.zara.net/assets/public/feeb/6d6b/1d8c495d96e2/c6a3032f75a4/06688424400-e1/06688424400-e1.jpg?ts=1720167928971&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/d250/24e1/38604302b2c0/f56bc8b586d2/06688424400-e2/06688424400-e2.jpg?ts=1720167928437&w=350",
    },
    {
      id: "22",
      name: "ДЖИНСЫ МЕШКОВОГО ПОКРЫТИЯ",
      title:
        "Мешковатые джинсы. Пять карманов. Эффект выцветания. Застежка на молнию и пуговицы спереди.",
      price: "109.00",
      category: "jeans",
      image:
        "https://static.zara.net/assets/public/7918/e535/6ddf4bd58da8/18bf4fc0b3b7/08062380427-e1/08062380427-e1.jpg?ts=1721836101705&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/d1f2/378b/e2a44767a26a/c66e505901f6/08062380427-e2/08062380427-e2.jpg?ts=1721836101734&w=350",
    },
    {
      id: "23",
      name: "БРЮКИ СО ШВАМИ - ОГРАНИЧЕННЫЙ",
      title:
        "Брюки прямого кроя из хлопкового денима. Модель с пятью карманами, передними швами, эффектом потертости и застежкой на молнию и пуговицы.",
      price: "129.00",
      category: "jeans",
      image:
        "https://static.zara.net/assets/public/d29a/25b6/4cb04afe9c71/9f9893e294e8/03991313802-e1/03991313802-e1.jpg?ts=1722263340734&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/f61c/616a/ba7c4eb8a8d2/c75407b5febd/03991313802-e2/03991313802-e2.jpg?ts=1722263340263&w=350",
    },
    {
      id: "24",
      name: "ПРЯМЫЕ ДЖИНСЫ",
      title:
        "Джинсы прямого кроя с пятью карманами. Мягкий эффект потертости. Застежка на пуговицы.",
      price: "111.00",
      category: "jeans",
      image:
        "https://static.zara.net/assets/public/5ad2/4da0/09734e7aad65/5b6bc9b55c4c/01538411802-e1/01538411802-e1.jpg?ts=1708000301222&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/a087/ae0f/be254044b5a9/17ad66382377/01538411802-e2/01538411802-e2.jpg?ts=1708000306195&w=350",
    },
    {
      id: "25",
      name: "ПРЯМЫЕ ДЖИНСЫ",
      title:
        "Джинсы прямого кроя с пятью карманами. Мягкий эффект потертости. Застежка на пуговицы.",
      price: "99.00",
      category: "jeans",
      image:
        "https://static.zara.net/assets/public/43d8/b73c/066f44818d4a/bf6b4f19b928/08062400800-e1/08062400800-e1.jpg?ts=1708000756240&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/f666/caac/31e941b88f12/77bd2be62bd2/08062400800-e2/08062400800-e2.jpg?ts=1708000749998&w=350",
    },
  ],
  products = [
    {
      id: "30",
      name: "Нейлоновая мини-сумка",
      title:
        "Мини-сумка через плечо с мягким дизайном. Изготовлена ​​из технической ткани. Одно отделение с магнитным передним клапаном. Регулируемый плечевой ремень",
      price: "39.00",
      image:
        "https://static.zara.net/assets/public/74e7/565e/dda94099b761/b380e2284923/13906420800-e1/13906420800-e1.jpg?ts=1722414313493&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/ffe7/fffe/2ea343db958d/920711e28e0a/13906420800-e3/13906420800-e3.jpg?ts=1722414314396&w=350",
    },
    {
      id: "31",
      name: "ПРОСТАЯ НЕСОСНАЯ СУМКА",
      title:
        "Основное отделение на молнии. Внутри небольшой карман на молнии. Передний карман на молнии. Ручка с одной стороны.",
      price: "55.00",
      image:
        "https://static.zara.net/assets/public/0a38/a280/53cf4e66ba03/f460d71f6cdd/13702420800-e1/13702420800-e1.jpg?ts=1722351485045&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/de90/4529/d5754d5080ed/c53d55afd9d5/13702420800-e2/13702420800-e2.jpg?ts=1722351498031&w=450",
    },
    {
      id: "32",
      name: "Прорезиненный рюкзак",
      title:
        "Рюкзак с прорезиненной отделкой. Основное отделение закрывается на молнию. Внутри есть небольшой карман на молнии. Спереди есть карман среднего размера на молнии. Плоские карманы по бокам.",
      price: "129.00",
      image:
        "https://static.zara.net/assets/public/b1a5/9c36/01c44dbb80e1/9ed6687c549e/13216420800-e1/13216420800-e1.jpg?ts=1722356340056&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/8f62/8ad3/5fc74afbac4c/a43d8de59285/13216420800-e3/13216420800-e3.jpg?ts=1722356330181&w=550",
    },
    {
      id: "34",
      name: "Футболка STWD с узором",
      title:
        "Подготовьтесь к приключениям в этой универсальной футболке, которая сочетает в себе смелый дизайн и высокое качество. Она идеально подходит как для активного отдыха, так и для повседневных выходов.",
      price: "70.00",
      image:
        "https://static.pullandbear.net/assets/public/0c4a/f6b2/f8a5436fa4d4/1248ed0772a5/07249521800-A1M/07249521800-A1M.jpg?ts=1720715862422&w=350",
      imageTwo:
        "https://static.pullandbear.net/assets/public/edc1/7bba/d5484a0cb8ef/905abc07f592/07249521800-A7M/07249521800-A7M.jpg?ts=1721732860213&w=350",
    },
    {
      id: "35",
      name: "Футболка Metallica",
      title:
        "Стильная футболка с ярким принтом, отражающим динамичную атмосферу городской жизни. Идеальный выбор для тех, кто ценит удобство и модный вид одежды.",
      price: "65.00",
      image:
        "https://static.pullandbear.net/assets/public/9b79/e5af/ea6843ac923d/46faf1fd547e/07248914251-A1M/07248914251-A1M.jpg?ts=1721639829092&w=350",
      imageTwo:
        "https://static.pullandbear.net/assets/public/2bae/5684/a3884ab791c3/0169b080695b/07248914251-A2M/07248914251-A2M.jpg?ts=1721639843076&w=350",
    },
    {
      id: "36",
      name: "Узкие укороченные джинсы.",
      title:
        "Эти узкие укороченные джинсы идеально сочетают в себе современный стиль и комфорт. Они оснащены пятью карманами и имеют эффект выцветания, придающий им уникальный и модный вид",
      price: "79.00",
      image:
        "https://static.zara.net/assets/public/1a45/5d27/6f454aebbff8/f3f8ed2a8124/08062305406-e1/08062305406-e1.jpg?ts=1720708349768&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/3811/1425/ff494010b82a/d152c4e9edeb/08062305406-e2/08062305406-e2.jpg?ts=1720708349193&w=350",
    },
    {
      id: "37",
      name: "Рваные выцветшие джинсы",
      title:
        "Выцветшие мешковатые джинсы с разрывами и потертостями на штанинах, пятикарманный дизайн и застежка на молнию и пуговицы спереди.",
      price: "89.00",
      image:
        "https://static.zara.net/assets/public/feeb/6d6b/1d8c495d96e2/c6a3032f75a4/06688424400-e1/06688424400-e1.jpg?ts=1720167928971&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/d250/24e1/38604302b2c0/f56bc8b586d2/06688424400-e2/06688424400-e2.jpg?ts=1720167928437&w=350",
    },
    {
      id: "38",
      name: "ДЖИНСЫ МЕШКОВОГО ПОКРЫТИЯ",
      title:
        "Мешковатые джинсы. Пять карманов. Эффект выцветания. Застежка на молнию и пуговицы спереди.",
      price: "109.00",
      image:
        "https://static.zara.net/assets/public/7918/e535/6ddf4bd58da8/18bf4fc0b3b7/08062380427-e1/08062380427-e1.jpg?ts=1721836101705&w=350",
      imageTwo:
        "https://static.zara.net/assets/public/d1f2/378b/e2a44767a26a/c66e505901f6/08062380427-e2/08062380427-e2.jpg?ts=1721836101734&w=350",
    },
  ];

app.get("/", (req, res) => {
  res.send(productsCollection);
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/", (req, res) => {
  res.json(productsCollection);
});
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});