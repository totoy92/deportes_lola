import { sqliteTable,  integer, text,numeric, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const inscripciones = sqliteTable("inscripciones", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	nombreCompleto: text("nombre_completo").notNull(),
	anioNacimiento: numeric("anio_nacimiento").notNull(),
	direccion: text("direccion").notNull(),
	comuna: text("comuna").notNull(),
	tipoDocumento: text("tipo_documento").notNull(),
	numeroDocumento: text("numero_documento").notNull(),
	deporteElegido: text("deporte_elegido").notNull(),
	grado: text("grado").notNull(),
});

export const inventario = sqliteTable("inventario", {
	idItem: integer("id_item").primaryKey({ autoIncrement: true }),
	item: text("item").notNull(),
	idUsuario: integer("id_usuario").notNull().references(() => usuarios.idUsuario, { onDelete: "cascade" } ),
	disponibilidad: text("disponibilidad").notNull(),
	estado: text("estado"),
});

export const prestamos = sqliteTable("prestamos", {
	idPrestamo: integer("id_prestamo").primaryKey({ autoIncrement: true }),
	idUsuario: integer("id_usuario").notNull().references(() => usuarios.idUsuario, { onDelete: "cascade" } ),
	idItem: integer("id_item").notNull().references(() => inventario.idItem, { onDelete: "cascade" } ),
	fechaPrestamo: numeric("fecha_prestamo").notNull(),
	fechaDevolucion: numeric("fecha_devolucion"),
	estado: text("estado"),
});

export const deportistasTorneos = sqliteTable("deportistas_torneos", {
	idDeportistaTorneo: integer("id_deportista_torneo").primaryKey({ autoIncrement: true }),
	idUsuario: integer("id_usuario").notNull().references(() => usuarios.idUsuario, { onDelete: "cascade" } ),
	idTorneo: integer("id_torneo").notNull().references(() => torneos.idTorneo, { onDelete: "cascade" } ),
});

export const usuarios = sqliteTable("usuarios", {
	idUsuario: integer("id_usuario").primaryKey({ autoIncrement: true }),
	codigo: integer("codigo").notNull(),
	documento: text("documento").notNull(),
	email: text("email").notNull(),
	clave: text("clave").notNull(),
	rol: text("rol").notNull(),
});

export const user = sqliteTable("user", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull().references(() => usuarios.email),
	password: text("password").notNull(),
});

export const session = sqliteTable("session", {
	id: text("id").primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => user.id),
	expiresAt: integer("expires_at").notNull(),
});