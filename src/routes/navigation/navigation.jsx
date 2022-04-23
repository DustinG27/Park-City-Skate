import { Fragment, useContext } from 'react';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { Outlet, Link } from 'react-router-dom'; 
import { signOutUser } from '../../utilities/firebase/firebase';
import './navigation.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {


  const { currentUser, setCurrentUser } = useContext(UserContext);  
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
    return (
       
      <Fragment>  
        <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className='logo' />
          </Link>
          <div className="links-container">
              <Link className="nav-link" to='/shop'> {/* linking routs together through nav bar*/}
                shop
              </Link>
              {/* if there is a current user. will render sign out
              if no current user, will render sign in */}
              {
                currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}> sign out </span>
                ) : ( 
                <Link className="nav-link" to='/auth'> {/* linking routes together through nav bar*/}
                sign in
              </Link>)}
              <CartIcon />
          </div>
          { isCartOpen && <CartDropdown /> }
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;