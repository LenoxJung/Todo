$(document).ready(function() {

  function addTodo(todo) {
    $('#todos').append('<li id="' + todo.id + '">' + todo.title + '</li>' + '<br>' + '<br>');
    
    $('#todo').val('');
  }

  $('#form').on('submit', function(event) {
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

  $('#todos').on('click', 'li', function() {
    $.ajax({
      url: '/todos/' + this.id,
      method: 'DELETE',
      datatype: 'json',
      success: this.remove()
    })
  });

});