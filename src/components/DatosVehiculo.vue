<template>
    <h1>Información del Vehículo</h1>
    <div v-if="vehiculo">
      <input v-model="vehiculo.id" type="text" disabled />
      <input v-model="vehiculo.placa" type="text" disabled />
      <input v-model="vehiculo.marca" type="text" disabled />
      <input v-model="vehiculo.modelo" type="text" disabled />
      <input v-model="vehiculo.color" type="text" disabled />
      <input v-model="vehiculo.precio" type="text" disabled />
    </div>
  </template>
  
  <script>
  import { consultaUnicaFachada } from "../clients/clienteVehiculo.js";
  
  export default {
    props: {
      placa: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        vehiculo: null,
      };
    },
    async mounted() {
      try {
        this.vehiculo = await consultaUnicaFachada(this.placa);
        console.log(this.vehiculo);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  