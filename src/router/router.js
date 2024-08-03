import { createRouter, createWebHashHistory } from "vue-router"

import BienvenidoPage from "@/pages/BienvenidoPage.vue"
import VehiculosPage from "@/pages/VehiculosPage.vue"
import IngresarVehiculo from "@/pages/IngresarVehiculoPage.vue"

const routes = [
    {
        path:"/ingresar",
        component:IngresarVehiculo
    },
    {
        path: "/",
        component: BienvenidoPage
    },
    {
        path: "/datosVehiculo",
        component: VehiculosPage
    },
    {

        path: "/:pathMatch(.*)*",
        component: NoFoundPage
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router