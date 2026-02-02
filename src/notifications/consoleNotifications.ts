import { NotificationService } from "../interface/NotificationService"; 
import { BaseNotification } from "./BaseNotification"; 

// export class ConsoleNotifcation implements NotificationService {

//      send(message: string): void {
//          console.log('console notification:', message);
//      }
// };


export class ConsoleNotifcation extends BaseNotification implements NotificationService {

    constructor() {
              
        super("Console notification")
    };

    send(message: string): void {
        console.log(this.logPrefix,message);
    };
};


