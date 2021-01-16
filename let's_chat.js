var firebaseConfig = {
    apiKey: "AIzaSyDb-QHbJ-U7RH2SPysfS0UP3AG6Mjn-mD8",
    authDomain: "project-let-s-chat-app.firebaseapp.com",
    databaseURL: "https://project-let-s-chat-app-default-rtdb.firebaseio.com",
    projectId: "project-let-s-chat-app",
    storageBucket: "project-let-s-chat-app.appspot.com",
    messagingSenderId: "724581199853",
    appId: "1:724581199853:web:b06af7fc46ec94af8281e4",
    measurementId: "G-QX353TX8JP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function login() {
    user_name = document.getElementById("Username").value;
   localStorage.setItem("James", user_name);
   firebase.database().ref("/").child(user_name).update({
       purpose:"adding use"
   });
    window.location = "let's_chat_room.html";
}