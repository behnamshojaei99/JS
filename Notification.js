function Notification(text, type, id) {
    this.text = text;
    this.type = type;
    this.id = id;
    this.route = (dest) => {
        console.log("send to " + dest)
    }
}

function NotificationCenter() {
    this.notifications = [];
    this.receive = function (...notifications) {
        notifications.map(notif => {
            this.notifications.push(notif);
        })
        //console.log(this.notifications)
    }
    this.manage =  () => {
        setTimeout(() => {
            this.notifications.map(notification => {
                notification.route('?')
            })
        }, 10000)
    }
}

const center = new NotificationCenter();
const notification = new Notification('first', 'chom', 1);
const notification1 = new Notification('second', 'chom1', 2);
const notification2 = new Notification('third', 'chom2', 3);
const notification3 = new Notification('fourth', 'chom3', 4);
const notification4 = new Notification('fifth', 'chom4', 5);
const notification5 = new Notification('sixth', 'chom5', 6);
notification.route("sa;")
center.receive(notification, notification2, notification4);
center.manage()

