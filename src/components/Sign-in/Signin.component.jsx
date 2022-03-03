import React from 'react';
import './Signin.styles.scss'
import FormInput from '../Form-Input/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label='email' name='email' required onChange={this.handleChange} value={this.state.email} />
                    <FormInput type="password" label='password' name='password' required onChange={this.handleChange} value={this.state.password} />
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;
