import React from "react";
import "./Footer.css";
import { 
  FaInstagram, FaTwitter, FaTelegramPlane,
  FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay, FaGooglePay 
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">

      <div className="col col1">
        <h4>Меблі та товари</h4>
        <p>Дивани та крісла</p>
        <p>Ліжка та матраци</p>
        <p>Шафи та зберігання</p>
        <p>Кухні та побутова техніка</p>
        <p>Текстиль та килими</p>
        <p>Освітлення</p>
        <p>Посуд та кухонне приладдя</p>
        <p>Декор для дому</p>
        <p>Товари для саду</p>
      </div>

      <div className="col col2">
        <h4>Ідеї для кімнат</h4>
        <p>Вітальня</p>
        <p>Спальня</p>
        <p>Дитяча кімната</p>
      </div>

      <div className="col col3">
        <h4>Послуги та допомога</h4>
        <p>Доставка та оплата</p>
        <p>Збирання меблів</p>
        <p>Повернення товару</p>
        <p>Відстеження замовлення</p>
        <p>Планування інтер'єру</p>
        <p>Зв'язатися з нами</p>
        <p>Питання та відповіді (FAQ)</p>
      </div>

      <div className="col col4">
        <h4>Про компанію</h4>
        <p>Про BN Home</p>
        <p>Екологія та сталий розвиток</p>
        <p>Наші магазини</p>
      </div>

      <div className="socials desktop-only">
        <FaInstagram />
        <FaTwitter />
        <FaTelegramPlane />
      </div>
      <div className="payments desktop-only">
        <FaCcVisa />
        <FaCcMastercard />
        <FaPaypal />
        <FaApplePay />
        <FaGooglePay />
      </div>

      <div className="mobile-icons">
        <div className="socials">
          <FaInstagram />
          <FaTwitter />
          <FaTelegramPlane />
        </div>
        <div className="payments">
          <FaCcVisa />
          <FaCcMastercard />
          <FaPaypal />
          <FaApplePay />
          <FaGooglePay />
        </div>
      </div>

      <button className="scroll-top" onClick={scrollToTop}>↑</button>

      <div className="bottom">
        <span>&copy; {new Date().getFullYear()} ТОВ «БН Хоум». Всі права захищені.</span>
        <span>Політика конфіденційності</span>
        <span>Умови використання сайту</span>
        <span>Політика використання файлів cookie</span>
      </div>

    </div>
  );
};

export default Footer;