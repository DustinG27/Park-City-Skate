import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase';

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

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { user } = await createAuthUserWithEmailAndPassword();
        

    }
    // on change handler for every object
    const handleChange = (event) => {
        // event.target gives everything in the corresponding input fields
        const { name, value } = event.target;
        // modifing one object on the values since they are essentially the same thing
        setFormFields({...formFields, [name]: value})
    };



    return (
        <div>
            <h1>Sign up w/ email and pass</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                
                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email}/>

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password}/>

                <label>Confirm Password</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm