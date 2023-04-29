import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const HomePage = () => {

  const products = useSelector((state) => state.products);
   
//   console.log('Products:...........', products); 
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
        // console.log(response.data);
        // console.log("State after fetching products:", state);
      })
     .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
 
  
  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };
  console.log('Products:...........p', products.products);
  return (
    <div className='main'>
      <h2>All Items</h2>
      <div className='home'>
        {products.products?.map((product) => (
          
          <div key={product.id} className='product-card'>
          <img src={product.images[0]} alt={product.title} />
            <h3> Titile:  {product.title}</h3>
            <p>Price: $ {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;