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
room_name=localStorage.getItem("roomname");

function send_message() {
      u_message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            u_name:user_name,
            ku_message:u_message,
            like:0
      });
      document.getElementById("msg").innerHTML="";

}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}