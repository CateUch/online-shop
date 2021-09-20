import CartButton from '../Cart/CartButton';
import style from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={style.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
