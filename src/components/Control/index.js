import styles from '../Control/Control.module.scss';

export const Control = props => {
    const { name, inputType, onChange, labelText, ...rest } = props;
    let input = null;
    if(inputType === 'input'){
        input = <input name={name} onChange={onChange} {...rest}/>
    } else {
        input = <textarea name={name} onChange={onChange} {...rest}/>
    }
    return (
        <div className={styles.control}>
            {input}
            <label>{labelText}</label>
        </div>
    )
}