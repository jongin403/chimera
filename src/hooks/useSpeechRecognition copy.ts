import { useState, useEffect } from 'react';

export type RecognitionConfig = {
  lang?: 'ko-KR' | 'en-US';
  interimResults?: boolean;
  continuous?: boolean;
  maxAlternatives?: 1;
};

export type RecognitionProps = {
  isSupport?: boolean;
  script: string;
  startSpeech: () => void;
  stopSpeech: () => void;
};

const useSpeechRecognition = (config: RecognitionConfig): RecognitionProps => {
  const [isSupport, setIsSupport] = useState<boolean>(false);
  const [script, setScript] = useState<string>('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const speechRecognition = initRecognition(config);
    if (!speechRecognition) {
      return;
    }
    setIsSupport(true);
    setRecognition(speechRecognition);
    bindRecognitionEvent(speechRecognition);
  }, []);

  const initRecognition = ({
    lang = 'ko-KR',
    interimResults = true,
    continuous = true,
    maxAlternatives = 1,
  }: RecognitionConfig) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      return null;
    }

    const recognitionObj = new SpeechRecognition();

    recognitionObj.lang = lang;
    recognitionObj.interimResults = interimResults;
    recognitionObj.continuous = continuous;
    recognitionObj.maxAlternatives = maxAlternatives;

    return recognitionObj;
  };

  const startSpeech = () => {
    recognition.start();
  };

  const stopSpeech = () => {
    recognition.stop();
  };

  const bindRecognitionEvent = (recognition: any) => {
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript as string;
      setScript(text);
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
    };
  };

  return { isSupport, script, startSpeech, stopSpeech };
};

export default useSpeechRecognition;
