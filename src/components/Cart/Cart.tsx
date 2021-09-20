import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import style from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {

  const items = useSelector(state => state.cart.items)

    return (
      <Card className={style.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>

          {items.map(item => (
            <CartItem
              key={item.id}
              item={{
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              }} />
          ))
          }


        </ul>
      </Card>
    );
  };


export default Cart;
