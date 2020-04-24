
import Vue from 'vue';

import VueRouter from 'vue-router';
import DiceRoller from './DiceRoller';
import Landing from './Pages/Landing';
import WeaponGenerator from './WeaponGenerator';
import '../css/default.css';

Vue.use(VueRouter);

const routes = [
    { 
        path: '/',
        component: Landing,
        meta: {
            title: 'Home'
        }
    },
    { 
        path: '/dice_roller',
        component: DiceRoller,
        meta: {
            title: 'Dice Roller'
        }
    },
    { 
        path: '/weapon_generator',
        component: WeaponGenerator,
        meta: {
            title: 'Weapon Generator'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || '';
    });
});

var vue = new Vue({
    router,
    el: '#app',
    data: {message: "Hello"}
});
