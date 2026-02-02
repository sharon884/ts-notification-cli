import { NotificationService } from "../interface/NotificationService";
import { BaseNotification } from "./BaseNotification";


// export class EmailNotification implements NotificationService {
//     send(message: string): void {
//         console.log('email notification:', message);
//     }
// };


export class EmailNotification extends BaseNotification implements NotificationService {

    constructor() {
        super("email notification");
    };


    send(message: string): void {
        console.log(this.logPrefix,message);
    };
};