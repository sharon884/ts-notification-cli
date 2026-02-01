import { NotificationService } from "../interface/NotificationService";


export class EmailNotification implements NotificationService {
    send(message: string): void {
        console.log('email notification:', message);
    }
};