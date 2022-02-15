const firebaseConfig = {
  apiKey: "AIzaSyCSzFEDyOn36jFtZLP2c1gHyiiz0b0SQUI",
  authDomain: "kwitter-website-32787.firebaseapp.com",
  databaseURL: "https://kwitter-website-32787-default-rtdb.firebaseio.com",
  projectId: "kwitter-website-32787",
  storageBucket: "kwitter-website-32787.appspot.com",
  messagingSenderId: "84454541084",
  appId: "1:84454541084:web:044fd507a7ad948bad5cd9",
  measurementId: "G-VJVJF8QBZG"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome -" + user_name;

function add_room(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html"
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  console.log("room_namme - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML += row; 

  //End code

  });});}
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location = "index.html"; 
   }
