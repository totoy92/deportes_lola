<script>
	import logo from '$lib/images/logo_chiquito.jpg';

	let registroInscripcion = [
		{
			full_name: 'Pedro Gómez',
			birth_date: '2005',
			address: 'Calle Falsa 123',
			neighborhood: 'Comuna 1',
			doc_type: 'Cédula',
			doc_number: '123456789',
			school: 'Colegio Nacional',
			sport: 'Fútbol',
			grade: '10',
			experience: '2 años'
		},
		{
			full_name: 'María Pérez',
			birth_date: '2007',
			address: 'Avenida Siempre Viva',
			neighborhood: 'Comuna 2',
			doc_type: 'Cédula',
			doc_number: '987654321',
			school: 'Escuela Deportiva',
			sport: 'Baloncesto',
			grade: '8',
			experience: '1 año'
		}
	];
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
		<li class="lista-uno"><a href="/al_pretar" class="mi-enlace">PRESTACION</a></li>
		<li class="lista-uno"><a href="/" class="mi-enlace">CERRAR SESION</a></li>
	</ul>
</nav>

<section>
	<h2>Historial de Inscripciones</h2>
</section>

<table border="1">
	<thead>
		<tr>
			<th>Nombre Completo</th>
			<th>Año de Nacimiento</th>
			<th>Dirección</th>
			<th>Comuna</th>
			<th>Tipo de Documento</th>
			<th>Número de Documento</th>
			<th>Colegio</th>
			<th>Deporte Elegido</th>
			<th>Grado</th>
			<th>Experiencia</th>
		</tr>
	</thead>
	<tbody>
		{#if hayRegistros}
			{#each registroInscripcion as registro}
				<tr>
					<td>{registro.full_name}</td>
					<td>{registro.birth_date}</td>
					<td>{registro.address}</td>
					<td>{registro.neighborhood}</td>
					<td>{registro.doc_type}</td>
					<td>{registro.doc_number}</td>
					<td>{registro.school}</td>
					<td>{registro.sport}</td>
					<td>{registro.grade}</td>
					<td>{registro.experience}</td>
				</tr>
			{/each}
		{:else}
			<tr>
				<td colspan="10">No hay registros aún.</td>
			</tr>
		{/if}
	</tbody>
</table>
