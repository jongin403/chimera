import Logo from '@components/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>헤더</div>
    </div>
  );
};

export default Header;
