import { NotificationService } from "../interface/NotificationService";

export class ConsoleNotifcation implements NotificationService {

     send(message: string): void {
         console.log('console notification:', message);
     }
};

