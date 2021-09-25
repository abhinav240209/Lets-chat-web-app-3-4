//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

  apiKey: "AIzaSyBrC3s40RldvdyTXDMGaNfOdWykXPEPBV0",

  authDomain: "lets-chat-web-app-3b058.firebaseapp.com",

  databaseURL: "https://lets-chat-web-app-3b058-default-rtdb.firebaseio.com",

  projectId: "lets-chat-web-app-3b058",

  storageBucket: "lets-chat-web-app-3b058.appspot.com",

  messagingSenderId: "946828433034",

  appId: "1:946828433034:web:11326ef06eaf41cdbd7f73",

  measurementId: "G-6R8VYYFJR2"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
console.log(user_name);
document.getElementById("welcome").innerHTML="Welcome " + user_name;

function add_room() {
  room_name= document.getElementById("room_name").value;
  localStorage.setItem("roomname", room_name);
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  window.location="kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room names are - " + Room_names);
  row="<div id="+Room_names + "class='btn btn-info' name='room_div' onclick='redirect_room(this.id)'>" + Room_names + "</div><hr>";
  
  document.getElementById("output").innerHTML+=row;
  
  //End code
  });});}
getData();

function redirect_room(R_name) {
  window.location="kwitter_page.html";
  localStorage.setItem("roomname", R_name);
}

function search_room() {
  search_item=document.getElementById("search").value;
  names=document.getElementsByName("room_div");
  console.log(names);

  for (i=0;i<names.length;i++) {
        console.log(names[i].innerHTML);
        if (search_item==names[i].innerHTML) {
              console.log("room name found");
              names[i].style.background="yellow";
        }
  }
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}