
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyBD_Dr4Ce15txPpyrP-E8nzAv3PS-qgiLg",
      authDomain: "chatapp-153b0.firebaseapp.com",
      databaseURL: "https://chatapp-153b0.firebaseio.com",
      projectId: "chatapp-153b0",
      storageBucket: "chatapp-153b0.appspot.com",
      messagingSenderId: "470703819688",
      appId: "1:470703819688:web:285e7e4764f852c0fbeb9d",
      measurementId: "G-494ZFM35WF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      });
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
