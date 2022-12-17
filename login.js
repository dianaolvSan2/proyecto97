function addUser(){
  user1= document.getElementById("name_user").value;

  localStorage.setItem("usuario", user1);

  window.location="hola_chat.html"
}
