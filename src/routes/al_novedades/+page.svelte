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
