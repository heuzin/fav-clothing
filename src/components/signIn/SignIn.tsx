import React from 'react';
import { auth } from '../../firebase/firabseConfig';
import { signInWithGoogle } from '../../firebase/firebaseUtils';
import CustomButom from '../customButtom/CustomButtom';
import FormInput from '../formInput/FormInput';
import styles from './SignIn.module.scss';

type IState = {
    email: string;
    password: string;
};

class SignIn extends React.Component<{}, IState> {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        this.setState({ [name]: value } as any);
    };

    render() {
        return (
            <div className={styles.signIn}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label={'email'}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label={'password'}
                        required
                        handleChange={this.handleChange}
                    />
                    <div className={styles.button}>
                        <CustomButom type="submit">Sign In</CustomButom>
                        <CustomButom onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButom>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
