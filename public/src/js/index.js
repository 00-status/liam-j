
import Vue from 'vue';

import VueRouter from 'vue-router';
import Home from './Pages/Home';
import DiceRollerPage from './DiceRoller/DiceRollerPage';
import WeaponGenerator from './Pages/WeaponGenerator';

import '../css/default.css';

Vue.use(VueRouter);

const routes = [
    { 
        path: '/',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    { 
        path: '/dice_roller',
        component: DiceRollerPage,
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
