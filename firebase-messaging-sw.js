importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js");

firebase.initializeApp({
 
  

});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
