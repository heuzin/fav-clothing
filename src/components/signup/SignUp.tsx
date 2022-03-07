import React from 'react';
import { auth } from '../../firebase/firabseConfig';
import { createUserProfileDocument } from '../../firebase/firebaseUtils';
import CustomButom from '../customButtom/CustomButtom';
import FormInput from '../formInput/FormInput';
import styles from './SignUp.module.scss';

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('passwords don"t match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className={styles.signUp}>
                <h2 className={styles.title}>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className={styles.signUpForm} onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButom type="submit">SIGN UP</CustomButom>
                </form>
            </div>
        );
    }
}

export default SignUp;
