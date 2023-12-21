import { ReactNode } from 'react';
import styles from './CommonButton.module.scss';
import classNames from 'classnames/bind';

export type CommonButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const cx = classNames.bind(styles);

const CommonButton = ({ children, className, onClick }: CommonButtonProps) => {
  return (
    <button className={cx(className, styles.commonButton)} onClick={onClick}>
      {children}
    </button>
  );
};

export default CommonButton;
