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
    <h2> ESTAS SON LAS PROGRAMACIONES DEL DIA DE HOY </h2>
</section>




<main>
    <p>
        <script>
            const urlParams = new URLSearchParams(window.location.search);
            const info = urlParams.get('info');
            document.write(info);
        </script>
    </p>


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
