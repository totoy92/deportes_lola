-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `inscripciones` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`nombre_completo` text NOT NULL,
	`anio_nacimiento` numeric NOT NULL,
	`direccion` text NOT NULL,
	`comuna` text NOT NULL,
	`tipo_documento` text NOT NULL,
	`numero_documento` text NOT NULL,
	`deporte_elegido` text NOT NULL,
	`grado` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `inventario` (
	`id_item` integer PRIMARY KEY AUTOINCREMENT,
	`item` text NOT NULL,
	`id_usuario` integer NOT NULL,
	`disponibilidad` text NOT NULL,
	`estado` text,
	FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `prestamos` (
	`id_prestamo` integer PRIMARY KEY AUTOINCREMENT,
	`id_usuario` integer NOT NULL,
	`id_item` integer NOT NULL,
	`fecha_prestamo` numeric NOT NULL,
	`fecha_devolucion` numeric,
	`estado` text,
	FOREIGN KEY (`id_item`) REFERENCES `inventario`(`id_item`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `deportistas_torneos` (
	`id_deportista_torneo` integer PRIMARY KEY AUTOINCREMENT,
	`id_usuario` integer NOT NULL,
	`id_torneo` integer NOT NULL,
	FOREIGN KEY (`id_torneo`) REFERENCES `torneos`(`id_torneo`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `usuarios` (
	`id_usuario` integer PRIMARY KEY AUTOINCREMENT,
	`codigo` integer NOT NULL,
	`documento` text NOT NULL,
	`email` text NOT NULL,
	`clave` text NOT NULL,
	`rol` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	FOREIGN KEY (`email`) REFERENCES `usuarios`(`email`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);

*/