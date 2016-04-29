$(function() {
  var nickname = $('#nickname').data('nickname');
  if (!nickname) {
    alert ('Oops, you have no nickname?');
    return;
  }

  var ably = new Ably.Realtime({ authUrl: '/token?nickname=' + escape(nickname) });

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
});
