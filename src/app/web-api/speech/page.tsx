'use client';

import { SpeechApi } from '@utils/speech-api';
import styles from './page.module.scss';
import { useState } from 'react';
import useSpeechRecognition from '@hooks/recognition';

const Page = () => {
  //const [isSupport, setIsSupport] = useState<boolean>(false);
  // const speechApi = new SpeechApi();
  // console.log({
  //   speechApi,
  // });
  const { isSupport, script, start } = useSpeechRecognition();

  return (
    <div className={styles.page}>
      <h1>발음 정확도 측정</h1>
      {isSupport && <Support script={script} start={start}></Support>}
      {!isSupport && <NoSupport></NoSupport>}
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

const Support = ({ script, start }: { script: string; start: () => void }) => {
  return (
    <div className={styles.noSupport}>
      <p> 음성 인식을 지원합니다.</p>
      <div>{script}</div>
      <button onClick={start}>시작</button>
    </div>
  );
};

export default Page;
