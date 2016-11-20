$(document).ready(function() {

  function addTodo(todo) {
    $('#todos').append('<li>' + todo.title + '</li>');
    $('#todo').val('');
  }

  $('#form').on('submit', function(event){
    event.preventDefault();
    var todo = $('#todo').val();
    $.ajax({
      url: '/todos',
      method: 'POST',
      datatype: 'json',
      data: { title: todo },
      success: addTodo
    });
    
  });

  function display(todos) {
    todos.forEach(function (todo) {
      addTodo(todo)
    });
  }

  $.ajax({
    url: '/todos',
    method: 'GET',
    datatype: 'json',
    success: display
  })

});