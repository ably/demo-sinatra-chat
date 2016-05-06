$(function() {
  var nickname = $('#nickname').data('nickname');
  if (!nickname) {
    alert ('Oops, you have no nickname?');
    return;
  }

  var ably = new Ably.Realtime({
    authUrl: '/token?nickname=' + escape(nickname),
    recover: function(lastConnectionDetails, cb) {
       /* Ensures page refresh recovers connection if clientId is a match
          see https://www.ably.io/documentation/realtime/connection/#connection-state-recovery */
      cb(lastConnectionDetails.clientId == nickname);
    }
  });

  /* Show the connection status in the UI */
  var $status = $('#status');
  ably.connection.on('connected', function() {
    $status.text('You are connected to Ably');
  });
  ably.connection.on('disconnected', function() {
    $status.text('Oops, your connection has gone, hold on, we are trying to reconnect');
  });
  ably.connection.on('suspended', function() {
    $status.text('Oops, we still cannot reconnect you to Ably. We will keep trying...');
  });

  /* Be present on global user channel and update UI as people enter & leaver */
  var globalChannel = ably.channels.get('global');
  globalChannel.presence.enter();

  /* Update the GUI as users enter and leave the channel */
  var $usersOnline = $('#users-online');
  function userButtonElem(member, state) {
    return $('<li><button id="user-' + member.connectionId +
           '" type="button" class="btn btn-' + state + '">' +
           member.clientId +
           '</button></li>');
  }

  /* Present users are on the channel already when we've joined it */
  globalChannel.presence.subscribe('present', function(message) {
    $usersOnline.append(userButtonElem(message, 'default'));
  });
  globalChannel.presence.subscribe('enter', function(message) {
    var btn = userButtonElem(message, 'success');
    $usersOnline.append(btn);
    setTimeout(function() { btn.find('button').removeClass('btn-success').addClass('btn-default'); }, 3000);
  });
  globalChannel.presence.subscribe('leave', function(message) {
    var btn = $usersOnline.find('#user-' + message.connectionId).addClass('btn-warning');
    setTimeout(function() { btn.parent().remove(); }, 3000);
  });
});
