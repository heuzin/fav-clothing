import CollectionItem from '../collectionItem/CollectionItem';
import styles from './CollectionPreview.module.scss';

const CollectionPreview = ({ title, items }: any) => (
    <div className={styles.collectionPreview}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <div className={styles.preview}>
            {items
                .filter((item: any, index: number) => index < 4)
                .map((item: any) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
