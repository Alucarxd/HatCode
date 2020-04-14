<?php include_once 'includes/templates/header.php'; ?>

 <section class="seccion contenedor">
  <h2>Registro de Usuario</h2>
  <form id="registro" class="registro" action="index.html" method="POST">
   <div id="datos_usuario" class="registro caja clearfix">
    <div class="campo">
     <label for="nombre">Nombre</label>
     <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre">
    </div>
    <div class="campo">
     <label for="apellido">Apellido</label>
     <input type="text" id="apellido" name="apellido" placeholder="Tu Apellido">
    </div>
    <div class="campo">
     <label for="email">Email</label>
     <input type="email" id="email" name="email" placeholder="Tu Email">
    </div>
    <div id="error"></div>
   </div><!-- #DATOS_USUARIOS -->

<?php include_once 'includes/templates/footer.php'; ?>