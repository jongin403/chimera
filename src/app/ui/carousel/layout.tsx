import styles from './layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
