<template>
    <div>

<div class="card">
    <div class="card-header">
        Usuarios
    </div>
  <div class="card-body">
    <table class="table">
        <thead>
            <tr>
<td>Id</td>
            <td>Nombre</td>
            <td>Correo</td>
            <td>Accion</td>
            </tr>
            
        </thead>
        <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{usuario.id}}</td>
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.correo}}</td>
                <td>
                    <button class="btn btn-primary" @click="editar(usuario)">Editar</button>
                    <button class="btn btn-danger" @click="eliminar(usuario)">Eliminar</button>
                </td>
            </tr>
        </tbody>

    </table>
  </div>
</div>
        Listar efren
        <div >
<div></div>
<div></div>
<div></div>
<a class="btn btn-primary btn-sm " href="#" role="button"> Hola </a>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            usuarios:[]
        }
    },
    created:function() {
        this.consultarEmpleados();
    },
    methods: {
     consultarEmpleados(){
         fetch('http://localhost/empleados/')
         .then(respuesta => respuesta.json())
         .then((datosR)=>{
             
             this.usuarios=[];
             if(typeof datosR[0]!='undefined'){
                 this.usuarios=datosR;
                 console.log(datosR);
             }
         })
         .catch(error => console.log(error));
     }   
    }
}
</script>