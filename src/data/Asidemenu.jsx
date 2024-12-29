import home from "../assets/aside-menu/home.svg";
import qr from "../assets/aside-menu/barcode.svg";
import pay from "../assets/aside-menu/pay.svg";
import wallet from "../assets/aside-menu/wallet.svg";
import Acdetails from "../assets/aside-menu/AcountDetails.svg";
import Acsetting from "../assets/aside-menu/setting.svg";
import currency from "../assets/aside-menu/currency.svg";
import history from "../assets/aside-menu/history.svg";

export const asideMenu = [
  {
    id: 1,
    icon: home,
    title: "icon",
    content: "Saving Account",
    link: "/",
  },
  {
    id: 2,
    icon: qr,
    title: "icon",
    content: "QR Code",
    link: "/qr",
  },
  {
    id: 3,
    icon: pay,
    title: "icon",
    content: "Pay",
    link: "/pay",
  },
  {
    id: 4,
    icon: wallet,
    title: "icon",
    content: "Add Money",
    link: "/addmoney",
  },
  {
    id: 5,
    icon: Acdetails,
    title: "icon",
    content: "Acount Details",
    link: "/acdetails",
  },
  {
    id: 6,
    icon: Acsetting,
    title: "icon",
    content: "Card Setting",
    link: "/cardsetting",
  },
  {
    id: 7,
    icon: currency,
    title: "icon",
    content: "currency Convertor",
    link: "/currencyconvertor",
  },
  {
    id: 8,
    icon: history,
    title: "icon",
    content: "History",
    link: "/history",
  },
];
