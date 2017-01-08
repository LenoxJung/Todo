$(document).ready(function() {

  $('#form').on('submit', function(event) {
    event.preventDefault();
    var todo = $('#todo').val();
    var dayArray = $('#datepick').val();
    dayArray = dayArray.split("/");
    day = dayArray[2] + dayArray[0] + dayArray[1]
    $.ajax({
      url: '/todos',
      method: 'POST',
      datatype: 'json',
      data: { title: todo, date:day },
      success: get
    });
    $('#todo').val('');  
    $('#datepick').val('');
  });

  function display(todos) {
    $('#calendar').remove();
    $('#form').append('<div id="calendar"></div>');
    $('#calendar').fullCalendar({
      events: '/todos'
    });
  };

  function get() {
    $.ajax({
      url: '/todos',
      method: 'GET',
      datatype: 'json',
      success: display
    });
  };

  $('#todos').on('click', 'button', function() {
    $.ajax({
      url: '/todos/' + this.parentElement.id,
      method: 'DELETE',
      datatype: 'json',
      success: get
    });
  });

  get();

});