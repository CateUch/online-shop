import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {

  const showCart = useSelector(state => state.showCart)
  const cartExist = useSelector(state => state.cart.items)

    return   (
    <Layout>
      {/* conditional false && expression  gives an error */}
      {/* solution: Inline && Operators conditional, wrap in React  Fragment*/}
      <>
     { (showCart && cartExist.length > 0) && <Cart /> }
     </>
      <Products />
    </Layout>
  );

}

export default App;
