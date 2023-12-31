import styles from './FloatingButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
type FloatingButtonProps = {
  className?: string;
};

const FloatingButton = ({ className }: FloatingButtonProps) => {
  return (
    <span className={cx(className, styles.floatingButton)}>플로팅 버튼</span>
  );
};

export default FloatingButton;
