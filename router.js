import Vue from "vue";
import VueRouter from "vue-router";
import Tapiocas from "./src/components/tapioca/Lista";
import FormTapioca from "./src/components/tapioca/Form";

Vue.use(VueRouter);

const routes = [  
    { path: '/tapiocas', component: Tapiocas, name: 'Tapiocas'},
    { path: '/tapiocas/criar', component: FormTapioca, name:"CriarTapioca"},
    { path: '/tapiocas/editar/:id', component: FormTapioca, name:"EditarTapioca"},
    { path: '*', component: Tapiocas}  
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes  
});

