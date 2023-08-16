$('#boton').on('click', function() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:5000/amigos',
    success: (data) => {
      console.log(data);

      let listaAmigos = $('#lista');
      listaAmigos.empty();

      data.forEach(function(amigos) {
        let listItem = $('<li>').text(`Nombre: ${amigos.name}, Edad: ${amigos.age}, Email: ${amigos.email}`);
        listaAmigos.append(listItem);
      });
    }
  });
});


$('#search').on('click', function(){
  var inputId = $('#input').val();
  if (inputId !== '') {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:5000/amigos/' + inputId,
      success: function(amigo) {
        $('#amigo').text('Nombre: ' + amigo.name + ', Edad: ' + amigo.age + ', Email: ' + amigo.email);
      },
      error: function() {
        $('#amigo').text('Amigo no encontrado.');
      }
    });
  };
})


$('#delete').on('click', function() {
    var inputId = $('#inputDelete').val();
    if (inputId !== '') {
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:5000/amigos/' + inputId,
      success: function(data) {
        $('#success').text('Amigo borrado exitosamente.');
      },
      error: function() {
        $('#success').text('Error al borrar el amigo.');
      }
    });
  }
});
