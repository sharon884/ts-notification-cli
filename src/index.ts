

function sendNotification(type: string, message: string): void {

    if (type === 'console') {
        console.log(type, 'notifcation' + message)
    } else if (type === 'email') {
        console.log(type, 'notifcation' + message)
    } else if (type === 'sms') {
        console.log(type, 'notifcation' + message)
    } else {
        console.log("unknown notification type ");
    }
};



sendNotification('console',"Build completed");
sendNotification('email',"you have new message");
sendNotification('sms',"otp is 1234");