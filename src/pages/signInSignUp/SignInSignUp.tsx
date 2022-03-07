import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signup/SignUp';
import styles from './SignInSignUp.module.scss';

const SignInSignUp = () => (
    <div className={styles.signInAndSignUp}>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;
