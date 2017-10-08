/**
 * Created by Jay on 10/4/2017.
 */
chrome.idle.onStateChanged.addListener(function(newstate) {
    console.log(newstate);
    // history_log.unshift({'state':newstate, 'time':time})
});

chrome.browserAction.onClicked.addListener(function() {
    window.open('popup.html', 'testwindow', 'width=700,height=600');
});

// Initialize Firebase
var config = {
   apiKey: "<qwertyuiopasdfghjklzxcvbnm>", // change this
   databaseURL: "https://<my-app-id>.firebaseio.com",
   storageBucket: "<my-app-id>.appspot.com"
};
firebase.initializeApp(config);
