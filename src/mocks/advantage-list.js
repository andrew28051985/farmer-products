import eat from "/src/assets/eat.svg";
import garbage from "/src/assets/garbage.svg";
import noMeat from "/src/assets/no-meat.svg";
import sprout from "/src/assets/sprout.svg";

const advantageList = [
  {
    id: 0,
    label: "farmer",
    titleText: "Еда намного вкуснее",
    image: eat,
    sizeImage: "52",
    text:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники"
  },
  {
    id: 2,
    label: "shop",
    titleText: "Просроченные продукты",
    image: garbage,
    sizeImage: "56",
    text:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара"
  },
  {
    id: 3,
    label: "farmer",
    titleText: "Натуральные продукты",
    image: sprout,
    sizeImage: "56",
    text:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений."
  },
  {
    id: 4,
    label: "shop",
    titleText: "Некачественное мясо",
    image: noMeat,
    sizeImage: "56",
    text:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"
  }
];

export default advantageList;
