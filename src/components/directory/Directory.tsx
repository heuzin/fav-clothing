import styles from './Directory.module.scss';
import MenuItem from '../menuItem/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directorySelectors';

const Directory = ({ sections }: any) => (
    <div className={styles.directoryMenu}>
        {sections.map(({ id, ...sections }: any) => (
            <MenuItem key={id} {...sections} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
