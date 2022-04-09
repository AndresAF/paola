create database pinv;
create table inventario (
 id int(10) PRIMARY KEY auto_increment not null, 
 producto varchar(60) not null,
 precioPorUnidad int(10) not null,
 tipoDeProducto varchar(60) not null,
 cantidad int(10) not null,
 descripcion varchar(100));
 
 create table ventas (
 id int(10) primary key auto_increment not null,
 fecha datetime not null,
 cantidad int(60) not null
 );
 
 create table productosVendidos (
 id int(10) primary key not null auto_increment,
 idInventario int(10) not null,
 idVentas int(10) not null,
 foreign key (idInventario) references inventario(id),
 foreign key (idVentas) references ventas(id));
 
 create table caja (
 id int(10) primary key auto_increment not null,
 cantidad int(60) not null,
 ultimaEntrada datetime);
 