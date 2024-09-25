<script>
	import logo from '$lib/images/logo_chiquito.jpg';

	let registroBalones = [
        { student_name: 'Juan Pérez', ball_id: '001', action: 'Préstamo' },
        { student_name: 'Ana López', ball_id: '002', action: 'Devolución' },
    ];


    let hayRegistros = registroBalones.length > 0;

</script>

<nav class="menu">
	<img src={logo} width="150" height="150" alt="LOLA DEPORTES" />
	<ul class="lista-uno">
		<li class="lista-uno"><a href="/al_novedades" class="mi-enlace">NOVEDADES</a></li>
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


<section>
    <h2>Historial de Préstamos y Devoluciones</h2>
</section>

<table border="1">
    <thead>
        <tr>
            <th>Nombre del Estudiante</th>
            <th>ID del Balón</th>
            <th>Acción</th>
        </tr>
    </thead>
    <tbody>
        {#if hayRegistros}
            {#each registroBalones as registro}
                <tr>
                    <td>{registro.student_name}</td>
                    <td>{registro.ball_id}</td>
                    <td>{registro.action}</td>
                </tr>
            {/each}
        {:else}
            <tr>
                <td colspan="3">No hay registros aún.</td>
            </tr>
        {/if}
    </tbody>
</table>
