
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

chrome.runtime.sendMessage({info: "state"}, function(response) {
  console.log(response.data);
});

chrome.runtime.sendMessage({add: ["Priyankit Singh", "available"]}, function(response) {
  console.log(response.status);
});

chrome.runtime.sendMessage({info: "userdata"}, function(response) {
  console.log(response.data);
});

// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAEv8m64fZy6wROGL-zkMcQkAB-mcdKn6U",
//     authDomain: "automatic-status-indicator.firebaseapp.com",
//     databaseURL: "https://automatic-status-indicator.firebaseio.com",
//     projectId: "automatic-status-indicator",
//     storageBucket: "automatic-status-indicator.appspot.com",
//     messagingSenderId: "1076122007504"
//   };
//   firebase.initializeApp(config);
//   console.log(firebase)

//   var ref = firebase.database().ref(0);
//   console.log(ref);

//   var userRef = firebase.database().ref("users/0");
//   console.log(userRef);
//   userRef.update({
//   	"name": "Jay"
//   })

//   var allUsers = firebase.database().ref("users");
//   console.log(allUsers);
//   // allUsers.set({
//   // 	name: "John Doe",
//   // 	status: "available"
//   // });

//   // Retrieve new posts as they are added to our database
// allUsers.on("child_added", function(snapshot, prevChildKey) {
//   var newPost = snapshot.val();
//   console.log("Name: " + newPost.name);
//   console.log("Status: " + newPost.status);
// });

// allUsers.push({
//   	name: "Jane Doe",
//   	status: "unavailable"
//   });

// allUsers.child("Jay").set({
//     "name": "Jay Pandya",
//     "status": "active"
// })
