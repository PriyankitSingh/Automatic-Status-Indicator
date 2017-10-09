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
  console.log(firebase)

  var ref = firebase.database().ref(0);
  console.log(ref);

  var userRef = firebase.database().ref("users/0");
  console.log(userRef);
  userRef.update({
  	"name": "Jay"
  })

  var allUsers = firebase.database().ref("users");
  console.log(allUsers);
  allUsers.child("Jay").set({
      "name": "Jay Pandya",
      "status": "active",
      "testField": "Testing"
  });