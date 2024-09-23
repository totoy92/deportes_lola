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
            <li class="lista-uno"><a href="/al_novedades" class="mi-enlace">INICIAR SESION</a></li>
        </ul>
    </div>
</nav>

<section>
    <h2>Registro de Préstamo y Devolución de Balones</h2>
</section>


<main>

    
        <label for="student_name">Nombre del Estudiante:</label><br>
        <input type="text" id="student_name" name="student_name" required><br><br>

        <label for="ball_id">ID del Balón:</label><br>
        <input type="text" id="ball_id" name="ball_id" required><br><br>

        <label for="action">Acción:</label><br>
        <select id="action" name="action" required>
            <option value="prestamo">Préstamo</option>
            <option value="devolucion">Devolución</option>
        </select><br><br>

        <input type="submit" value="Registrar">


    
    <p id="mensaje"></p>
</main>


<aside class="servicios">
	<center>
		<h4>SITIOS DE INTERÉS EN LOS QUE PUEDES ENCONTAR MAS INFORMACION DE NUESTRA PAGINA</h4>
		<br />

		<ul class="lista">
			<li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
			<br />
			<li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
		</ul>
	</center>
</aside>
