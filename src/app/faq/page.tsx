import styles from './page.module.scss';
import Accordion from '@components/Accordion';

const Page = () => {
  return (
    <div className={styles.page}>
      <Accordion></Accordion>
    </div>
  );
};

export default Page;
