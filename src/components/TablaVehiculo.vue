<template>
    <h1>Vehículos</h1>
    <button @click="consultarVehiculos">Consultar Vehículos</button>
  
    <div class="tabla" v-if="lista">
      <h2>ID</h2>
      <h2>Placa</h2>
      <h2>Marca</h2>
      <h2>Modelo</h2>
      <h2>Color</h2>
      <h2>Precio</h2>
      <h2>Botón</h2>
      <div v-for="v in lista" :key="v.id" class="vehiculo-item">
        <p>{{ v.id }}</p>
        <p>{{ v.placa }}</p>
        <p>{{ v.modelo }}</p>
        <p>{{ v.color }}</p>
        <p>{{ v.precio }}</p>
        <button @click="setPlaca(v.placa)">Visualizar</button>
        <!-- <button @click="eliminar(v.placa)">Eliminar</button> -->
      </div>
    </div>
  
    <div v-if="placa">
      <DatosVehiculo :placa="placa" />
    </div>
  </template>
  
  <script>
  import DatosVehiculo from "../components/DatosVehiculo.vue";
  import { consultaTotalFachada } from "../clients/clienteVehiculo.js"
  
  export default {
    data() {
      return {
        lista: null,
        placa: null,
      };
    },
    components: {
      DatosVehiculo,
    },
    methods: {
      async consultarVehiculos() {
        try {
          this.lista = await consultaTotalFachada();
          console.log(this.lista);
        } catch (error) {
          console.error('Error vehiculos no encontrados:', error);
        }
      },
      setPlaca(placa) {
        this.placa = placa;
      },
    },
  };
  </script>
  
  <style scoped>
  .tabla {
    display: grid;
    grid-template-columns: repeat(6, 150px);
  }
  
  .vehiculo-item {
    display: contents;
  }
  </style>
  