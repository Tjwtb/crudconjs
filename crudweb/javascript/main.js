let miform = document.getElementById("miform");

fetch("php/mostrardatos.php")
   .then((Response)=> Response.json())
   .then((data) => {
    var tabla = document.getElementById("mitabla");
    for(var i = 0; i < data.length; i++){
        var row = `<th>
                      <td>${data[i].Nombre}</td>
                      <td>${data[i].Apellido}</td>
                      <td>${data[i].Correo}</td>
                      <td>${data[i].Salario}</td>
                   <th>`
        tabla.innerHTML += row
    }
});

function Insertar()
{
    let formdatos = new FormData(miform);
    fetch("php/insertarempleado.php",{
        method: "POST",
        body: formdatos
    })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            alert("Elemento insertado con exito!");
            window.location.reload();
        });
};
function Eliminar()
{
    let formdatos = new FormData(miform);
    fetch("php/eliminarempleado.php",{
        method: "POST",
        body: formdatos
    })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            alert("Elemento eliminado con exito!");
            window.location.reload();
        });
};
function Actualizar()
{
    let formdatos = new FormData(miform);
    fetch("php/actualizar.php",{
        method: "POST",
        body: formdatos
    })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            alert("Elemento actualizado con exito!");
            window.location.reload();
        });
};