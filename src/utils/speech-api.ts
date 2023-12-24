export class SpeechApi {
  obj: unknown;
  canUse: boolean;

  constructor() {
    this.obj = this.createRecognition();
    this.canUse = this.obj !== null;
  }

  createRecognition(): unknown {
    if (window.SpeechRecognition !== undefined) {
      return new window.SpeechRecognition();
    }
    if (window.webkitSpeechRecognition !== undefined) {
      return new window.webkitSpeechRecognition();
    }
    return null;
  }
}
