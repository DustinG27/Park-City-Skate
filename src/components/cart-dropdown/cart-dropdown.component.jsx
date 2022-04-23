import './cart-dropdown.style.scss';
import Button from '../button/button';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button> checkout </Button>
        </div>
    )
}

export default CartDropdown;