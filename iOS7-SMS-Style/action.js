!function() {

  var ENTER_KEY = 13
    , smsMessage = document.querySelector('#sms-message')
    , sendSMS = document.querySelector('#send-sms')
    , smsWindow = document.querySelector('#sms-window-content')
    , count = 0;

  function sendMessage(event) {

    var message = smsMessage.value;

    if ((event.type === 'keypress' && event.which !== ENTER_KEY) || !message) return;

    var node = document.createElement('span');
    node.classList.add('sms-message');
    node.classList.add(count%2 === 0 ? 'message-sent' : 'message-received');
    node.innerText = message;
    smsWindow.appendChild(node);
    
    setTimeout(function() {
      node.classList.add('active')
    }, 20);

    smsMessage.value = '';
    count++;

  }

  smsMessage.addEventListener('keypress', sendMessage, false);
  sendSMS.addEventListener('click', sendMessage, false);

}();
