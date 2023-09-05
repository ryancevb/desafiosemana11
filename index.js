//Metodo POST 
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  let datosNombre = document.getElementById("nombre").value
  let datosApellido = document.getElementById("apellido").value
  let datosFecha = document.getElementById("fecha").value

  let datosFormulario = {
    nombre: datosNombre,
    apellido: datosApellido,
    fecha: datosFecha
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datosFormulario)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
});
