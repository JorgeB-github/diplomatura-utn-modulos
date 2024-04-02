CREATE DATABASE ejercicio;
CREATE TABLE ejercicio.empleados (
    id_emp INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20),
    apellido VARCHAR(20),
    trabajo VARCHAR(50),
    edad INT,
    salario INT,
    mail VARCHAR(70)
);

INSERT INTO ejercicio.empleados (nombre, apellido, trabajo, edad, salario, mail) VALUES 
('Juan','Hagan','Programador Senior',32,120000,'juan_hagan@bignet.com'),
('Gonzalo','Pillai','Programador Senior',32,110000,'g_pillai@bignet.com'),
('Ana','Dharma','Desarrollador Web',27,90000,'ana@bignet.com'),
('Maria','Anchor','Desarrollador Web',26,85000,'mary@bignet.com'),
('Alfred','Fernandez','Programador',31,75000,'af@bignet.com'),
('Juan','Agüero','Programador',36,85000,'juan@bignet.com'),
('Eduardo','Sacan','Programador',25,85000,'eddi@bignet.com'),
('Alejandro','Nanda','Programador',32,70000,'alenanda@bignet.com'),
('Hernan','Rosso','Especialista Multimedia',33,90000,'hernan@bignet.com'),
('Pablo','Simon','Especialista Multimedia',43,85000,'ps@bignet.com'),
('Arturo','Hernandez','Especialista Multimedia',32,75000,'arturo@bignet.com'),
('Jimena','Cazado','Diseñador Web',32,110000,'jimena@bignet.com'),
('Roberto','Luis','Administrador de sistemas',35,100000,'roberto@bignet.com'),
('Daniel','Gutierrez','Administrador de sistemas',34,900000,'daniel@bignet.com'),
('Miguel','Harper','Ejecutivo de Ventas Senior',36,120000,'miguel@bignet.com'),
('Monica','Sanchez','Ejecutivo de ventas',30,90000,'monica@bignet.com'),
('Alicia','Simlai','Ejecutivo de ventas',27,70000,'alicia@bignet.com'),
('Jose','Iriarte','Ejecutivo de ventas',27,72000,'jose@bignet.com'),
('Sabrina','Allende','Gerente de Soporte tecnico',32,200000,'sabrina@bignet.com'),
('Pedro','Campeon','Gerente de finanzas',36,220000,'pedro@bignet.com'),
('Mariano','Dharma','Presidente',28,300000,'mariano@bignet.com');