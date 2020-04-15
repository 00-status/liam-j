
import Vue from 'vue';
import VueRouter from 'vue-router';
import Page from './page';

Vue.use(VueRouter);

const diceRoller = { template: '<h1>Dice Roller!</div>' };
const weaponGenerator = { template: '<h1>Weapon Generator!</h1>' }

const routes = [
    { path: '/', component: Page },
    { path: '/dice_roller', component: diceRoller },
    { path: '/weapon_generator', component: weaponGenerator }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

var vue = new Vue({
    router,
    el: '#app',
    data: {message: "Hello"}
});
