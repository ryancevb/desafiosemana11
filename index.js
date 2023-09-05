/*fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));*/

  let datosNombre= document.getElementById("nombre").value
  let datosApellido= document.getElementById("apellido").value
  let datosFecha= document.getElementById("fecha").value

  fetch(' https://jsonplaceholder.typicode.com/users.')
  .then(response => response.json())
  .then(data => console.log(data));

  