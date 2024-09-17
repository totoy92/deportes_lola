<script>

	import logo from '$lib/images/logo_chiquito.jpg';

</script>

<nav class="menu">
    <div class="logo-y-enlaces">
        <img src={logo} width="150" height="150" alt="LOLA DEPORTES" />
        <ul class="lista-uno">
            <li class="lista-uno"><a href="/" class="mi-enlace">INICIO</a></li>
            <li class="lista-uno"><a href="/novedades" class="mi-enlace">NOVEDADES</a></li>
            <li class="lista-uno dropdown">
                <a href="." class="mi-enlace">TORNEOS</a>
                <ul class="dropdown-content">
                    <li><a href="/programacion" class="mi-enlace">Programación</a></li>
                    <li><a href="/inscripcion" class="mi-enlace">Inscripción intercolegiados</a></li>
                </ul>
            </li>
            <li class="lista-uno"><a href="/prestacion" class="mi-enlace">PRESTACION</a></li>
            <li class="lista-uno"><a href="/iniciar_sesion" class="mi-enlace">INICIAR SESION</a></li>
        </ul>
    </div>
</nav>

<section>
    <h2>REGISTRATE PARA JUGAR EL TORNEO</h2>
</section>

<main>
    <div class="registration-form">
        <div class="error-message" id="error-message" style="display: none; color: red;">Por favor, completa todos los campos.</div>
        <div id="success-message" style="display: none; color: green;">Informacion enviada con exito.</div>

        <form id="inscripcionForm">
            <label for="full_name">Nombres completos:</label>
            <input type="text" id="full_name" name="full_name" required><br>

            <label for="birth_date">Año de nacimiento:</label>
            <input type="date" id="birth_date" name="birth_date" required><br>

            <label for="address">Direccion:</label>
            <input type="text" id="address" name="address" required><br>

            <label for="neighborhood">Comuna:</label>
            <input type="text" id="neighborhood" name="neighborhood" required><br>

            <label for="doc_type">Tipo de documento:</label>
            <select id="doc_type" name="doc_type" required>
                <option value="cc">Cedula de Ciudadania</option>
                <option value="ti">Tarjeta de Identidad</option>
                <option value="ce">Cedula de Extranjera</option>
            </select><br>

            <label for="doc_number">Numero de documento:</label>
            <input type="text" id="doc_number" name="doc_number" required><br>

            <label for="school">Colegio actual:</label>
            <input type="text" id="school" name="school" required><br>

            <label for="sport">Deporte elegido:</label>
            <input type="text" id="sport" name="sport" required><br>

            <label for="doc_type">Grado:</label>
            <select id="doc_type" name="doc_type" required>
                <option value="nov">noveno</option>
                <option value="dec">decimo</option>
                <option value="onc">once</option>
            </select><br>

            <label for="experience">Experiencia:</label>
            <textarea id="experience" name="experience" rows="4" required></textarea><br>

            <input type="submit" value="Inscribirse">
        </form>
    </div>

    <script>
        document.getElementById('inscripcionForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            
            var formData = new FormData(this);

            
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'registro_inscripcion.php', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    document.getElementById('success-message').style.display = 'block';
                    document.getElementById('error-message').style.display = 'none';
                
                    document.getElementById('inscripcionForm').reset();
                } else {
                    document.getElementById('error-message').textContent = 'Ocurrio un error, por favor intenta de nuevo.';
                    document.getElementById('error-message').style.display = 'block';
                }
            };
            xhr.send(formData);
        });
    </script>
</main>
