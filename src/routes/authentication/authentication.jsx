
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

import './authentication.style.scss';


const Authentication = () => {

 
    return (
        <div className='authentication-container'>
            <h1>Sign in Page</h1>
            
           <SignInForm />
           <SignUpForm />
        </div>
    );
};

export default Authentication;