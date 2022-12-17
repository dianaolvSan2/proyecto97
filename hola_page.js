var firebaseConfig = {
    apiKey: "AIzaSyAWRAo9YccaPYn3U9pMi3mhTShOaDABo44",
    authDomain: "hola-chat-b4d51.firebaseapp.com",
    databaseURL:"https://hola-chat-b4d51-default-rtdb.firebaseio.com",
    projectId: "hola-chat-b4d51",
    storageBucket: "hola-chat-b4d51.appspot.com",
    messagingSenderId: "664737275633",
    appId: "1:664737275633:web:50980e56b20244ef451350"
  };
  
  firebase.initializeApp(firebaseConfig);

     
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");


 function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value= "";

 }