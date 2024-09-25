<script>
	import logo from '$lib/images/logo_chiquito.jpg';
</script>

<nav class="menu">
	<img src={logo} width="150" height="150" alt="LOLA DEPORTES" />
	<ul class="lista-uno">
		<li class="lista-uno"><a href="/}al_novedades" class="mi-enlace">NOVEDADES</a></li>
		<li class="lista-uno dropdown">
			<a href="." class="mi-enlace">TORNEOS</a>
			<ul class="dropdown-content">
				<li><a href="/al.programacion" class="mi-enlace">Programación</a></li>
				<li><a href="/al.inscribirse" class="mi-enlace">Inscriptos</a></li>
			</ul>
		</li>
		<li class="lista-uno"><a href="/al_pretar" class="mi-enlace">PRESTACION</a></li>
		<li class="lista-uno"><a href="/" class="mi-enlace">CERRAR SESION</a></li>
	</ul>
</nav>
