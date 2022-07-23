const Check = document.getElementById("enviarCorreo");

Check.addEventListener("click", function(r){
    r.preventDefault();
    const checkPolitica = document.getElementById("check").checked;
    if (checkPolitica === true){
        const btnEnvioCot = document.getElementById("enviarCorreo");

        btnEnvioCot.addEventListener("click", function(e){
            e.preventDefault();
            const email = document.getElementById("email").value;
            const nombre = document.getElementById("nombre").value;
            const mensaje = document.getElementById("mensaje").value;
            // window.location.href = `mailto:soporte@sanmiguelsas.com?subject=Inquietudes%2FCotizaciones%20medio%20Pagina%20Web&body=Nombre%3A%20${nombre}%0ACorreo%20Electrónico%3A%20${email}%0AMensaje%3A%20${mensaje}`;
            window.location.href = `https://wa.me/573102156205/?text=Hola!%2C%20soy%20${nombre}%2C%20vi%20la%20pagina%20web%20y%20mi%20mensaje%20es%3A%20${mensaje}.%0A%0AGracias%20y%20quedo%20pendiente%20de%20su%20respuesta.%0A%0AMi%20Correo%20Electr%C3%B3nico%20es%3A%20${email}`;
        });

    }else{
        swal("¡Precaución!", "Debes aceptar la Política de privacidad!", "error");
    }
        
});
