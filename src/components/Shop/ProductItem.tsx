import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartStore';
import Card from '../UI/Card';
import style from './ProductItem.module.css';

const ProductItem = (props: ItemType) => {
  const dispatch = useDispatch()

  const { id, title, price, description } = props;

  function addToCartHandler() {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
  }

  return (
    <li className={style.item}>
      <Card key={id}>
        <header>
          <h3 >{title}</h3>
          <div className={style.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={style.actions}>
          <button onClick={ addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

//type
type ItemType = {
  id: string;
  title: string;
  price: number;
  description: string;
}
