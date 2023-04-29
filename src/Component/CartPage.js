import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    dispatch({ type: 'RESET_CART' });
    alert('Items have been checked out successfully!');
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div> 
    <h3 className='p3'>My Cart</h3>
    <div className='sec'>
      {cart.map(item => (
        <div key={item.id} className='sec-card'>
          <img src={item.images[0]} alt={item.title} />
          <h3>Title: {item.title}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
      <div className="sidebar">
        <h3>Checkout</h3>
        {cart.map(item => (
          <div key={item.id} className='cart'>
            <p>{item.id}. {item.title}</p>
             <p>$ {item.price}</p>
          </div>
        ))}
        <div className='cart1'>
          <p>Total: </p>
          <p> ${getTotalPrice()}</p>
        </div>
     
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
    </div>
    
  );
};

export default CartPage;