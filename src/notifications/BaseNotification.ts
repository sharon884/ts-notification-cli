export abstract class BaseNotification {
  protected logPrefix: string;

  constructor(prefix: string) {
    this.logPrefix = prefix;
  }

  abstract send(message: string): void;
}
