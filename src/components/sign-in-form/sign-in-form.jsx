import { useState, useContext } from 'react';
import FormInput from '../form-input/form-input';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword 
} from '../../utilities/firebase/firebase';
import { UserContext } from '../../contexts/user.context';
import Button from '../button/button';
import './sign-in-form.style.scss';

// default object to hold form events
const defaultFormFields = {
    email: '',
    password: ''
};


const SignInForm = () => {
    // setting an initial value and a return value to setState
    const [formFields, setFormFields] = useState(defaultFormFields);
    // destructuring the four values as a component
    const { email, password,  } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => { {/* utilizing sign in with google auth */}
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
}

    const handleSubmit = async (event) => {
        event.preventDefault();
        // password alert check
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            
            resetFormFields();
        } catch(error) {
           switch(error.code) {
               case 'auth/wrong-password':
                   alert('incorrect password');
                   break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
           }
        }
    }

    // on change handler for every object
    const handleChange = (event) => {
        // event.target gives everything in the corresponding input fields
        const { name, value } = event.target;
        // modifing one object on the values since they are essentially the same thing
        setFormFields({...formFields, [name]: value})
    };



    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign up w/ email and pass</span>
            <form onSubmit={handleSubmit}>
                
              
                
                
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>

                
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>

                
                <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm