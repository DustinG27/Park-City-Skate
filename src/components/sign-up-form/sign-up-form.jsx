import { useState, useContext } from 'react';
import FormInput from '../form-input/form-input';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase';
import { UserContext } from '../../contexts/user.context';
import Button from '../button/button';
import './sign-up-form.style.scss';

// default object to hold form events
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {
    // setting an initial value and a return value to setState
    const [formFields, setFormFields] = useState(defaultFormFields);
    // destructuring the four values as a component
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    console.log('hit');

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // password alert check
        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email in use,");
            }
            console.log("User creation error:" + error);
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
            <h2>Don't have an account?</h2>
            <span>Sign up w/ email and pass</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                
                
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>

                
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>

                
                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm