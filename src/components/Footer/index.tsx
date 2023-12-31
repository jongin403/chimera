import Logo from '@components/Logo';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={cx(styles.className, styles.footer)}>
      <div className={styles.footerContent}>푸터</div>
    </div>
  );
};

export default Footer;
