
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyD2EdBikRrkg1HiOfFEjnDhnj9cbgBeS38",
  authDomain: "sigma-5a87b.firebaseapp.com",
  databaseURL: "https://sigma-5a87b-default-rtdb.firebaseio.com",
  projectId: "sigma-5a87b",
  storageBucket: "sigma-5a87b.appspot.com",
  messagingSenderId: "469100613029",
  appId: "1:469100613029:web:e20a434aeeccb0529f2c4c",
  measurementId: "G-L1YR3537E5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Firebase settings over hear.

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot)
     {
      childKey = childSnapshot.key;
      Room_name = childKey;
      console.log("Room Names - " + Room_name);
      row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)' >" + Room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    }
    );
  });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
