var config = {
 apiKey: "AIzaSyB4FRUXGcWqn9D1kwz0x_utFad8_BkFYqs",
 authDomain: "chat-app-76571.firebaseapp.com",
 databaseURL: "https://chat-app-76571.firebaseio.com",
 storageBucket: "chat-app-76571.appspot.com",
 messagingSenderId: "951173134018"
 };
 firebase.initializeApp(config);
 
 var chatData = firebase.database().ref();
 
 function pushMessage(event) {
     if (event.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    chatData.push({name: name, text: text});
    $('#messageInput').val('');
}
$('#messageInput').keypress(pushMessage');