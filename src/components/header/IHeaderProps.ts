import firebase from 'firebase/compat/app';

export interface IHeaderProps {
    currentUser: firebase.User | null;
    hidden: boolean;
}
