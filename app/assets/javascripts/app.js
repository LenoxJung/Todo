$(document).ready(function() {

  $('#form').on('submit', function(event) {
    event.preventDefault();
    var todo = $('#todo').val();
    $.ajax({
      url: '/todos',
      method: 'POST',
      datatype: 'json',
      data: { title: todo },
      success: get
    });
    $('#todo').val('');    
  });

  function display(todos) {
    $('#todos').empty();
    todos.forEach(function (todo) {
      $('#todos').append('<li id="' + todo.id + '">' + todo.title + ' <button>remove</button>' + '</li>' + todo.date + '<br>' + '<br>');
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

  $('#calendar').fullCalendar({
    events: '/todos'
  });

});