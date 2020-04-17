
$(document).ready( function() {

  var list = $('.main-sent');
  var keyInput = $('.send-text');

  keyInput.keyup(function(e) {
    console.log(e.which, e.keyCode);

    if (e.which == 13 || e.keyCode == 13) {
      var inputList = keyInput.val().trim();

        if (inputList.length > 0) {
          var newInputList = $('.template li').clone();
          newInputList.prepend(inputList);
          list.append(newInputList);
          keyInput.val('');
        }
    }
  });

  // REMOVE AND UNDERLINE
  $('body').on('click', '.todo li i', function() {
    $(this).parent().remove();
  })



}); /* END DOCUMENT */
