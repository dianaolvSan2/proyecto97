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

user_name = localStorage.getItem("usuario");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name+ " !";

function addRoom(){
   room_name = document.getElementById("room_name").value;


   firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
   });

   localStorage.setItem("room_name",room_name);
   window.location.replace("hola_page.html")

}

// function getData()
//  {
//       firebase.database().ref("/").on('value', function(snapshot) {
//       document.getElementById("output").innerHTML = "";
//       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
//        Room_names = childKey;
//       //Inicio del código
//          console.log("Room_name " + Room_names);
//          row= "<div class='room_name' id=" + Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div> <hr>";
//          document.getElementById("output").innerHTML += row;
//       //Final del código
//       });});}
// getData();

document.getElementById("logout").addEventListener('click',function(e){
   localStorage.removeItem("usuario");
   localStorage.removeItem("room_name");
   window.location.replace("index.html");
 });
// function logout(){
   // localStorage.removeItem("usuario");
   // localStorage.removeItem("room_name");
   // window.location.replace("index.html");
// }