import styles from './BottomNavigation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
type BottomNavigationProps = {
  className?: string;
};

const BottomNavigation = ({ className }: BottomNavigationProps) => {
  return (
    <div className={cx(styles.className, styles.bottomNavigation)}>
      <div className={styles.bottomNavigationContent}>바텀탭</div>
    </div>
  );
};

export default BottomNavigation;