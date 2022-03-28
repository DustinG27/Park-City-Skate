import { auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
     } from '../../utilities/firebase/firebase';
import SignUpForm from '../../components/sign-up-form/sign-up-form';


const SignIn = () => {

    const logGoogleUser = async () => { {/* utilizing sign in with google auth */}
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google Pop-up</button>
           <SignUpForm />
        </div>
    );
};

export default SignIn;