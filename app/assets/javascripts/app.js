$(document).ready(function() {

  function addTodo(todo) {
    $('#todos').append('<li>' + todo.title + '</li>');
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

  $.getJSON('/todos', function(todos) {
    $.each(todos, function() {
      addTodo(this);
    });
  });

});