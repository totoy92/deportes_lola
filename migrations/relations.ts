import { relations } from "drizzle-orm/relations";
import { usuarios, inventario, prestamos, torneos, deportistasTorneos, user, session } from "./schema";

export const inventarioRelations = relations(inventario, ({one, many}) => ({
	usuario: one(usuarios, {
		fields: [inventario.idUsuario],
		references: [usuarios.idUsuario]
	}),
	prestamos: many(prestamos),
}));

export const usuariosRelations = relations(usuarios, ({many}) => ({
	inventarios: many(inventario),
	prestamos: many(prestamos),
	deportistasTorneos: many(deportistasTorneos),
	users: many(user),
}));

export const prestamosRelations = relations(prestamos, ({one}) => ({
	inventario: one(inventario, {
		fields: [prestamos.idItem],
		references: [inventario.idItem]
	}),
	usuario: one(usuarios, {
		fields: [prestamos.idUsuario],
		references: [usuarios.idUsuario]
	}),
}));

export const deportistasTorneosRelations = relations(deportistasTorneos, ({one}) => ({
	torneo: one(torneos, {
		fields: [deportistasTorneos.idTorneo],
		references: [torneos.idTorneo]
	}),
	usuario: one(usuarios, {
		fields: [deportistasTorneos.idUsuario],
		references: [usuarios.idUsuario]
	}),
}));

export const torneosRelations = relations(torneos, ({many}) => ({
	deportistasTorneos: many(deportistasTorneos),
}));

export const userRelations = relations(user, ({one, many}) => ({
	usuario: one(usuarios, {
		fields: [user.email],
		references: [usuarios.email]
	}),
	sessions: many(session),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));