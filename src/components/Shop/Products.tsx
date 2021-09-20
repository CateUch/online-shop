import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import style from './Products.module.css';

const Products = () => {

  const products = useSelector(state => state.products);

  return (
    <section className={style.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(item => {
        return <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        })
        }
      </ul>
    </section>
  );
};

export default Products;
