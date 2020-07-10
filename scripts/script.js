
let sendSomething = function(type, text) {
	if (!type || type.length == 0 || !text || text.length == 0) return;

	let notificationsBar = document.querySelector(".notificationsBarStyle");

	if (!notificationsBar) {
		notificationsBar = document.createElement("div");
		notificationsBar.classList.add("notificationsBarStyle");
	};

	let notification = document.createElement("div");
	notification.classList.add(type);

	notification.innerHTML = text;

	notificationsBar.appendChild(notification);
	document.body.appendChild(notificationsBar);

	setTimeout(() => {notification.remove()}, 5000);
};