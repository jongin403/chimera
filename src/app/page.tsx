import Image from 'next/image';
import styles from './page.module.scss';
import CommonButton from '@components/atom/CommonButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>설명</div>
      <CommonButton>버튼</CommonButton>
    </main>
  );
}
