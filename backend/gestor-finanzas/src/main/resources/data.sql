-- Insertar datos en la tabla Persona
INSERT INTO persona (id, nombre, apellido) VALUES (1, 'Juan', 'Pérez');
INSERT INTO persona (id, nombre, apellido) VALUES (2, 'María', 'Gómez');
INSERT INTO persona (id, nombre, apellido) VALUES (3, 'Carlos', 'López');

-- Insertar datos en la tabla Gasto
INSERT INTO gasto (id, categoria, monto, fecha, id_persona, detalle)
VALUES
    (1, 'SUPERMERCADO', 9200.00, '2024-08-01', 1, 'Compra de alimentos en supermercado'),
    (2, 'COMIDA', 23750.00, '2024-08-02', 1, 'Cena en restaurante'),
    (3, 'ENTRETENIMIENTO', 6300.00, '2024-08-03', 2, 'Entradas para el cine'),
    (4, 'VIAJE', 5000.00, '2024-08-04', 2, 'Billetes de avión y alojamiento'),
    (5, 'JUEGOS', 1200.00, '2024-08-05', 3, 'Compra de videojuego'),
    (6, 'OTROS', 4500.00, '2024-08-06', 3, 'Gastos varios'),
    (7, 'OTROS', 900.00, '2024-08-06', 3, 'Gastos varios'),
    (8, 'JUEGOS', 900.00, '2024-08-06', 3, 'God of war');
