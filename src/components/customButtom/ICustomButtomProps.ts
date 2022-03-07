import firebase from 'firebase/compat/app';

export interface ICustomButtomProps {
    type?: 'submit' | 'reset' | 'button' | undefined;
    isGoogleSignIn?: boolean;
    inverted?: boolean;
    onClick?: () => any;
}
