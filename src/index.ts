import { NotificationService } from "./interface/NotificationService";
import { ConsoleNotifcation } from "./notifications/consoleNotifications";
import { EmailNotification } from "./notifications/emailNotifications";


let notifier : NotificationService ;


notifier = new ConsoleNotifcation();
notifier.send('build completed successfully');


notifier = new EmailNotification();
notifier.send("Email build completed");


