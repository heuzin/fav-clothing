import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';
import { createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userActions';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import { auth } from './firebase/firabseConfig';

interface IAppProps {
    currentUser: any;
    setCurrentUser: any;
}

class App extends React.Component<IAppProps> {
    unsubscribeFromAuth: any;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef?.onSnapshot((snapShot) => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
