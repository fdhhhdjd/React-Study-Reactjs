import styles from './button.css'

const Button = ({children, handleClick}) => <button className={styles.button} onClick={handleClick}>{children}</button>

export default 