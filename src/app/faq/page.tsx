import styles from './page.module.scss';
import Accordion from '@components/Accordion';

const Page = () => {
  return (
    <div className={styles.page}>
      <Accordion />
    </div>
  );
};

export default Page;
