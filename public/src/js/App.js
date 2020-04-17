
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home';
import DiceRoller from './DiceRoller';
import WeaponGenerator from './WeaponGenerator';

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
