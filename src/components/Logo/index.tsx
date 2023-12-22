import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export type LogoProps = {
  type: 'header' | 'footer' | 'small';
  className?: string;
};

const Logo = ({ type, className }: LogoProps) => {
  return <div className={cx(className, styles.logoWrap)}>로고</div>;
};

export default Logo;
