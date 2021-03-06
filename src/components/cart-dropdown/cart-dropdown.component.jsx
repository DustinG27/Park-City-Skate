import './cart-dropdown.style.scss';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
             {cartItems.map((item) => (
             <CartItem key={item.id} cartItem={item} /> ))}
            </div>
            <Button> checkout </Button>
        </div>
    )
}

export default CartDropdown;