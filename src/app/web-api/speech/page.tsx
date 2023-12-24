'use client';

import { SpeechApi } from '@utils/speech-api';
import styles from './page.module.scss';
import { useState } from 'react';

const Page = () => {
  const [isSupport, setIsSupport] = useState<boolean>(false);
  const speechApi = new SpeechApi();
  console.log({
    speechApi,
  });

  return (
    <div className={styles.page}>
      <h1>발음 정확도 측정</h1>
      {speechApi.canUse && <Support></Support>}
      {!speechApi.canUse && <NoSupport></NoSupport>}
    </div>
  );
};

const NoSupport = () => {
  return (
    <div className={styles.noSupport}>
      <p> 음성 인식을 지원하지 않습니다</p>
    </div>
  );
};

const Support = () => {
  return (
    <div className={styles.noSupport}>
      <p> 음성 인식을 지원합니다.</p>
    </div>
  );
};

export default Page;
