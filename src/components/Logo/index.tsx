import { Chimera } from '@icons/Chimera';
import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cx(className, styles.logoWrap)}>
      <Chimera></Chimera>로고
    </div>
  );
};

export default Logo;
