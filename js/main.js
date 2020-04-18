
$(document).ready( function() {

  var list = $('.main-sent');
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



}); /* END DOCUMENT */
