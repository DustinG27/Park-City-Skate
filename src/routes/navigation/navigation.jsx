import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
    return (
       
      <Fragment>  {/* using fragment because wrapping div is not needed */}
        <div class="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className='logo' />
          </Link>
          <div className="links-container">
              <Link className="nav-link" to='/shop'> {/* linking routs together through nav bar*/}
                shop
              </Link>
              <Link className="nav-link" to='/sign-in'> {/* linking routs together through nav bar*/}
                sign in
              </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;