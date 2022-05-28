import './product-card.style.scss';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

// grabbing product object for use in card
const ProductCard = ({ product }) => {
    // destructuring product object from json
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    
    return (
    
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}> add to cart </Button>
    </div>
    
    )

}

export default ProductCard;