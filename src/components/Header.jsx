import styles from './Header.module.css';
import logo from '../assets/rocket.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.todo}>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </div>
        </header>
    );
};

export default Header;
