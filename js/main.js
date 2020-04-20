
$(document).ready( function() {

  //CHAT
  var list = $('#main-right');
  var keyInput = $('.send-text');

  keyInput.keyup(function(e) {
    console.log(e.which, e.keyCode);

    if (e.which == 13 || e.keyCode == 13) {
      var inputList = keyInput.val().trim();

        if (inputList.length > 0) {
          var newInputList = $('.template .sent').clone();
          newInputList.children('.message').text(inputList);
          list.append(newInputList);
          keyInput.val('');

          var time = new Date();
          var hour = addZero( time.getHours() );
          var minutes = addZero( time.getMinutes() );
          var timeToSend = hour + ':' + minutes;
          newInputList.children('.message-timer').text(timeToSend);

          var timerMessage = setInterval(function() {

            var received = $('.template .received').clone();
            received.children('.message');
            list.append(received);

            var time = new Date();
            var hour = addZero( time.getHours() );
            var minutes = addZero( time.getMinutes() );
            var timeToSend = hour + ':' + minutes;
            received.children('.message-timer').text(timeToSend);

            clearInterval(timerMessage)

          }, 1000);
        }
    }
  });

  //SEARCH CONTACT list
    var searchList = $('.search-input');

    searchList.on("keyup", function() {
      var name = $(this).val().toLowerCase().trim();
      $('.contact-list').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(name) > -1)
      });
    });


  // CAMBIO ICONA FOOTER INPUT
  var sendIcon = $('#footer-right .input-div .icon');

  keyInput.on('focus blur', function() {
      sendIcon.toggleClass('fa-microphone fa-paper-plane');
  });

  //FOCUS CAMBIO BG MENU Contacts
  // NEED FIXING
  // $('.contact-list').children().focus(function() {
  //   $(this).parent().css("background-color", "orange");
  // }).blur(function() {
  //   $(this).parent().css("background-color", "yellow");
  // });

}); /* END DOCUMENT */


//////////////////FUNCTIONS

function addZero(number) {
    if(number < 10) {
        number = '0' + number;
    }

    return number;
}
