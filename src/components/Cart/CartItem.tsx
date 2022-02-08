import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartStore';
import style from './CartItem.module.css';

const CartItem = (props: any) => {

const dispatch = useDispatch()

  const { title, quantity, totalPrice, price, id } = props.item;

  function incrementQuantityHandler () {
    dispatch(cartActions.increment(id))
  };

  function decrementQuantityHandler () {
    dispatch(cartActions.decrement(id))
  }

  function removeItemFromCart () {
    dispatch(cartActions.remove(id))
  }


  return (
    <li className={style.item}>s
      <header>
        <h3>{title}</h3>
        <div className={style.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={style.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={style.details}>
        <div className={style.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={style.actions}>
          <button onClick={ decrementQuantityHandler} >-</button>
          <button onClick={ incrementQuantityHandler} >+</button>
          <button onClick={ removeItemFromCart} >🗑</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
