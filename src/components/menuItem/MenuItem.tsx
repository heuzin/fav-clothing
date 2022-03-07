import { withRouter } from 'react-router';
import { IMenuItemProps } from './IMenuItemProps';
import styles from './MenuItem.module.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }: IMenuItemProps) => {
    return (
        <div className={size ? `${styles.large} ${styles.menuItem}` : styles.menuItem} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className={styles.backgroundImage} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={styles.content}>
                <h1 className={styles.title}>{title.toUpperCase()}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
