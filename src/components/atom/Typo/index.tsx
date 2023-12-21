import styles from './Typo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Variant =
  | 'div'
  | 'span'
  | 'p'
  | 'li'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type TypoProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const Typo = ({ children, variant = 'div', className }: TypoProps) => {
  const TypoTag: React.ElementType = variant as React.ElementType;
  return <TypoTag className={cx(className, styles.typo)}>{children}</TypoTag>;
};

export default Typo;
