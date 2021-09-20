import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartStore';
import style from './CartButton.module.css';

const CartButton = () => {

  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity)


  const showCartHandler = () => {
    dispatch(cartActions.toggleShowCart())
  }



  return (
    <button className={style.button} onClick={showCartHandler} >
      <span>My Cart</span>
      <span className={style.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
