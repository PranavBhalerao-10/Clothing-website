import Signin from '../../components/Sign-in/Signin.component';
import SignUp from '../../components/sign-up/signup.component';
import './Sign-in and Sign-up.styles.scss'

const SigninSignupPage = () => (
    <div className='Sign-in_and_Sign-out'>
        <Signin />
        <SignUp />
    </div>
)

export default SigninSignupPage;