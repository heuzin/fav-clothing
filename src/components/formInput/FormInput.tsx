import styles from './FormInput.module.scss';
import { IFormInputProps } from './IFormInputProps';

const FormInput = ({ handleChange, label, ...props }: IFormInputProps) => (
    <div className={styles.group}>
        <input className={styles.formInput} onChange={handleChange} {...props} />
        {label && <label className={`${styles.formInputLabel} ${props.value.length ? styles.shrink : ''}`}>{label}</label>}
    </div>
);

export default FormInput;
