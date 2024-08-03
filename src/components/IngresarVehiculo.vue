<template>
    <div class="container">
      <h1>INSERTAR Vehiculo</h1>
      <p type="placa"><input type="text" v-model="placa" /></p>
      <p type="marca"><input type="text" v-model="marca" /></p>
      <p type="modelo"><input type="text" v-model="modelo" /></p>
      <p type="color"><input type="text" v-model="color" /></p>
      <p type="precio"><input type="text" v-model="precio" /></p>
      <button v-on:click="insertarVehiculo">GUARDAR</button>
      <p v-if="mensaje">{{ mensaje }}</p>
      <!-- Mensaje de éxito -->
    </div>
  </template>
  
  <script>
  import { guardarFachada } from "../clients/clienteVehiculo.js";
  export default {
    //option API
    data() {
      return {
       placa:"",
       marca:"",
       modelo:"",
       color:"",
       precio:""

      };
    },
    methods: {
      insertarVehiculo() {
       
        const bodyVehiculo = {
          placa: this.placa,
          marca: this.marca,
          modelo: this.modelo,
          color:this.color,
          precio:this.precio,
        };
        guardarFachada(bodyVehiculo);
        this.mensaje = "Vehiculo insertado correctamente"; // Actualiza el mensaje
        // Opcional: Limpiar el formulario
        this.placa = "";
        this.marca = "";
        this.modelo= "";
        this.color= "";
        this. precio= "";

      },
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p:before {
    content: attr(type);
    display: block;
  }
  p {
    text-align: left;
    margin-bottom: 0px;
  }
  input {
    margin-bottom: 0px;
  }
  h1 {
    margin-bottom: 0px; /* Ajusta según sea necesario */
  }
  button {
    margin-top: 20px;
  }
  </style>
  
  