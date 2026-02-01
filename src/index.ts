import { NotificationService } from "./interface/NotificationService";
import { ConsoleNotifcation } from "./notifications/consoleNotifications";


const notifier : NotificationService = new ConsoleNotifcation();

notifier.send('build completed successfully');