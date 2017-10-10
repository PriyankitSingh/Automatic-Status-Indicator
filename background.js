/**
 * Created by Jay on 10/4/2017.
 */
 // important properties
 var state = "available"; // initial state
 var userdata = [];

chrome.idle.onStateChanged.addListener(function(newstate) {
    state = newstate;
    console.log(newstate);
    // history_log.unshift({'state':newstate, 'time':time})
    // send message to index.js
});

// Sends message to the current tab
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});

chrome.browserAction.onClicked.addListener(function() {
    window.open('index.html', 'testwindow', 'width=700,height=600');
});

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAEv8m64fZy6wROGL-zkMcQkAB-mcdKn6U",
    authDomain: "automatic-status-indicator.firebaseapp.com",
    databaseURL: "https://automatic-status-indicator.firebaseio.com",
    projectId: "automatic-status-indicator",
    storageBucket: "automatic-status-indicator.appspot.com",
    messagingSenderId: "1076122007504"
  };
  firebase.initializeApp(config);
  var allUsers = firebase.database().ref("users");

  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello"){
      sendResponse({farewell: "goodbye"});
    }
    if(request.info == "database"){ // probably don't need this
    	var userRef = firebase.database();
    	console.log(userRef);
    	sendResponse({data: userRef});
    }
    if (request.info == "state"){
    	console.log(state);
    	sendResponse({data: state});
    }
    if (request.info == "userdata"){
    	console.log(userdata);
    	sendResponse({data: userdata});
    }
    if(request.add != null){
    	if (request.add.length == 2){
	    	console.log(request.add[0] + " " + request.add[1]);
	    	addToDatabase(request.add[0], request.add[1]);
	    	sendResponse({status: "done"});
	    }
    }
    
  });

function addToDatabase(username, userstatus){
	// allUsers.push({
	//   	name: username,
	//   	status: userstatus
 //  });
	allUsers.child(username).set({
	    "name": username,
	    "status": userstatus
	});
}

// Retrieve new posts as they are added to our database
allUsers.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("Name: " + newPost.name);
  console.log("Status: " + newPost.status);
  console.log("Previous Post ID: " + prevChildKey);
  console.log(" ");
  userdata.push([newPost.name, newPost.status]);
});
