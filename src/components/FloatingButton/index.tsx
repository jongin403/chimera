import styles from './FloatingButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
type FloatingButtonProps = {
  className?: string;
};

const FloatingButton = ({ className }: FloatingButtonProps) => {
  return (
    <div className={cx(styles.className, styles.floatingButton)}>
      플로팅 버튼
    </div>
  );
};

export default FloatingButton;
