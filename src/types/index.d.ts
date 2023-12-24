export {};

declare global {
  interface Window {
    SpeechRecognition: any | null;
    webkitSpeechRecognition: any | null;
  }
}
