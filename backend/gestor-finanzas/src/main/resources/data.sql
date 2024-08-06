-- Insertar datos en la tabla Persona
INSERT INTO persona (id, nombre, apellido) VALUES (1, 'Juan', 'Pérez');
INSERT INTO persona (id, nombre, apellido) VALUES (2, 'María', 'Gómez');
INSERT INTO persona (id, nombre, apellido) VALUES (3, 'Carlos', 'López');

-- Insertar datos en la tabla Gasto
INSERT INTO gasto (id, categoria, monto, fecha, id_persona) VALUES (1, 'SUPERMERCADO', 1500.00, '2024-08-01', 1);
INSERT INTO gasto (id, categoria, monto, fecha, id_persona) VALUES (2, 'COMIDA', 750.00, '2024-08-02', 1);
INSERT INTO gasto (id, categoria, monto, fecha, id_persona) VALUES (3, 'ENTRETENIMIENTO', 300.00, '2024-08-03', 2);
INSERT INTO gasto (id, categoria, monto, fecha, id_persona) VALUES (4, 'VIAJE', 5000.00, '2024-08-04', 2);
INSERT INTO gasto (id, categoria, monto, fecha, id_persona) VALUES (5, 'JUEGOS', 1200.00, '2024-08-05', 3);
INSERT INTO gasto (id, categoria, monto, fecha, id_persona) VALUES (6, 'OTROS', 450.00, '2024-08-06', 3);
