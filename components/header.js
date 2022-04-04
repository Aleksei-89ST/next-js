import { SiBurgerking } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
          <a>Домой</a>
          <a>О нас</a>
          <a>Отзывы</a>
          <a>Бургеры</a>
      </nav>
    </header>
  );
};
export default Header;
