var host = document.location.host.split(':');
var ip = host[0];
var ws = new WebSocket('ws://' + ip + ':8080');
var ul = document.createElement('ul');
ws.onmessage = function(event) {
  var li = document.createElement('li');
  li.innerHTML = event.data;
  ul.appendChild(li);
};
window.addEventListener('beforeunload', function(){
  ws.close();
});
window.onload =  function() {
  console.log(ws);
  var input = document.createElement('input');
  input.addEventListener('change', function(e) {
    var value = e.target.value;
    ws.send(value);
  });
  document.body.appendChild(input);
  document.body.appendChild(ul);
};

