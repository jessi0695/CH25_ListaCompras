// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

//Limpiar Campos
btnClear.addEventListener("click", function (event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
});

//Agregar campos
btnAgregar.addEventListener("click", function (event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
    if (txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        lista += "<li>Se debe escribir un nombre válido.</li>";
        alertValidaciones.style.display="block";
    }else {
        txtNombre.style.border="";
    }//if txtNombre
   
    if (txtNumber.value.length==0){
        txtNumber.style.border="solid thin red";
        lista += "<li>Se debe escribir una cantidad válida.</li>";
        alertValidaciones.style.display="block";
    }else {
        txtNumber.style.border="";
    }//if txtNumber

    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend",lista);
}); //btnAgregar "click"

txtNumber.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumber.value= txtNumber.value.trim();
});//txtNumber.blur

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value= txtNombre.value.trim();
});//txtNombre.blur
