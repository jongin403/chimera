'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import useSpeechRecognition, { RecognitionProps } from '@hooks/recognition';

const Page = () => {
  const { isSupport, script, startSpeech, stopSpeech } = useSpeechRecognition(
    {},
  );

  useEffect(() => {
    console.log({
      script,
    });
  }, [script]);

  return (
    <div className={styles.page}>
      <h1>발음 정확도 측정</h1>
      {isSupport && (
        <Support
          script={script}
          startSpeech={startSpeech}
          stopSpeech={stopSpeech}
        ></Support>
      )}
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

const Support = ({ script, startSpeech, stopSpeech }: RecognitionProps) => {
  return (
    <div className={styles.noSupport}>
      <p> 음성 인식을 지원합니다.</p>
      <div>{script}</div>
      <button onClick={startSpeech}>시작</button>
      <button onClick={stopSpeech}>중지</button>
    </div>
  );
};

export default Page;
