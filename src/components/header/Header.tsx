import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/favicon.png';
import { IHeaderProps } from './IHeaderProps';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import styles from './Header.module.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { auth } from '../../firebase/firabseConfig';

const Header: React.FC<IHeaderProps> = ({ currentUser, hidden }) => (
    <div className={styles.header}>
        <Link className={styles.logoContainer} to="/">
            <img src={Logo} alt="" className={styles.logo} style={{ width: '100px', height: '80px' }} />
        </Link>
        <div className={styles.options}>
            <Link className={styles.option} to="/shop">
                SHOP
            </Link>
            {currentUser ? (
                <div className={styles.option} onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className={styles.option} to="/signin">
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
