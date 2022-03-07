import React from 'react';
import styles from './CustomButtom.module.scss';
import { ICustomButtomProps } from './ICustomButtomProps';

const CustomButom: React.FC<ICustomButtomProps> = ({ isGoogleSignIn, inverted, ...props }) => (
    <button className={`${isGoogleSignIn && styles.googleSignIn} ${inverted && styles.inverted} ${styles.customButton}`} {...props}>
        {props.children}
    </button>
);

export default CustomButom;
