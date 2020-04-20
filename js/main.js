
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
          newInputList.prepend(inputList);
          list.append(newInputList);
          keyInput.val('');
        }
    }
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
