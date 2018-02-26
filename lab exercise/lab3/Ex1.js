var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com');

// When the connection is open, send some data to the server
connection.onopen = function () {
  connection.send('Ping'); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  var output = document.getElementById('output');
  output.innerHTML += "Server:"  + e.data + "<br>";
  console.log('Server: ' + e.data);
};

function sendMess() {
  var message = document.getElementById('input').value;
  connection.send(message);
}
