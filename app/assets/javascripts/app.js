$(document).ready(function() {

  $('#form').on('submit', function(event){
    var todo = $('#todo').val();
    $.ajax({
      url: '/todos',
      method: 'POST',
      datatype: 'json',
      data: { title: todo },
      success: $('#todo').val('')
    });
    event.preventDefault();
  });

});