

function validarCredenciales(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "william" && password === "0293") {
        window.location.href = "/al_novedades;
    } else {
        alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
}
