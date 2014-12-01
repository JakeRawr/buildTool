'use strict';
var $ = require('jquery');

$('#cal').append('<p>You have 15 minutes before I send help</p>');

var min = 0;
var second = 0;
var bool = 0;

setInterval(function() {
  second =  ++second % 60;
  if (bool) {
    min++;
    bool = 0;
  }

  if (second === 59) {
    bool = 1;
  }
  $('.time').html(min + ' : ' + second);

  if (min == 15) {
    $.ajax({
      type: 'GET',
      url: '/getHelp'
    }).done(function(data) {
      $('#help').html(data.text);
      $('head').append('<meta http-equiv="Refresh" content="5; url=https://gitter.im/codefellows/javascript">');
    });
  }
}, 1000);
