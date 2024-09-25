<script>
	import logo from '$lib/images/logo_chiquito.jpg';
</script>

<nav class="menu">
	<img src={logo} width="150" height="150" alt="LOLA DEPORTES" />
	<ul class="lista-uno">
		<li class="lista-uno"><a href="/al_novedades" class="mi-enlace">NOVEDADES</a></li>
		<li class="lista-uno dropdown">
			<a href="." class="mi-enlace">TORNEOS</a>
			<ul class="dropdown-content">
				<li><a href="/al_programacion" class="mi-enlace">Programación</a></li>
				<li><a href="/al_inscribirse" class="mi-enlace">Inscriptos</a></li>
			</ul>
		</li>
		<li class="lista-uno"><a href="/al_prestar" class="mi-enlace">PRESTACION</a></li>
		<li class="lista-uno"><a href="/" class="mi-enlace">CERRAR SESION</a></li>
	</ul>
</nav>

<section>
	<h2>Escribe las novedades del dia</h2>
</section>

<main>
	<form action="/novedades" method="get">
		<label for="info">Copia la informacion aqui:</label><br />
		<textarea id="info" name="info" rows="4" cols="50" placeholder="Copia aquí la información..."
		></textarea><br />
		<button type="submit">Enviar informacion</button>
	</form>
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
