import { useState, useEffect } from 'react';

const useSpeechRecognition = () => {
  const [isSupport, setIsSupport] = useState<boolean>(false);
  const [script, setScript] = useState<string>('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const speechRecognition = initRecognition();
    if (!speechRecognition) {
      return;
    }
    setIsSupport(true);
    setRecognition(speechRecognition);
    bindRecognitionEvent(speechRecognition);
  }, []);

  const initRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      return null;
    }

    const recognitionObj = new SpeechRecognition();
    recognitionObj.lang = 'ko-KR';
    recognitionObj.interimResults = false;
    recognitionObj.maxAlternatives = 1;

    return recognitionObj;
  };

  const start = () => {
    recognition.start();
  };

  const bindRecognitionEvent = (recognition: any) => {
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript as string;
      setScript(text);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
    };
  };

  return { isSupport, script, start };
};

export default useSpeechRecognition;
