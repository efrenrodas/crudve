<template>
    <div class="container">
      <div class="card text-left">
        <div class="card-header">
          Empleados
        </div>
        <div class="card-body">
         <form>
<div class="form-group">
  <label for=""></label>
  <input type="text" class="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">Nombre</small>
</div>
<div class="form-group">
  <label for=""></label>
  <input type="text" class="form-control" name="correo" id="correo" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">Correo electronico</small>
</div>
<div class="btn-group">
    <button type="button" class="btn btn-primary">Guardar</button>
    <button type="button" class="btn btn-secondary">Cancelar</button>
</div>
         </form>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    
}
</script>