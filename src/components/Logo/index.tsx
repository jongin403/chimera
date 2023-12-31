import styles from './Logo.module.scss';
import classNames from 'classnames/bind';
import Typo from '../atom/Typo';
import { Noto_Sans_KR, Montserrat } from 'next/font/google';

const cx = classNames.bind(styles);

export type LogoProps = {
  className?: string;
};

const notoSansKr = Noto_Sans_KR({
  weight: ['900'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
});

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cx(className, styles.logoWrap)}>
      <Typo className={cx(styles.logoName, notoSansKr.className)}>Chimera</Typo>
    </div>
  );
};

export default Logo;
