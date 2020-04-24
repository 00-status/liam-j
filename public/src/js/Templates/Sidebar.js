
import './sidebar.css';

const template = `
<div class="sidebar">
    <div class="sidebar-item" v-on:click="navigate('/')">home</div>
    <div class="sidebar-item" v-on:click="navigate('/dice_roller')" to="/dice_roller">Dice Roller</div>
    <div class="sidebar-item" v-on:click="navigate('/weapon_generator')">Weapon Generator</div>
</div>
`;

const Sidebar = { template, methods: {
    navigate: function (route) {
        if (route !== this.$route.path) {
            this.$router.push(route);
        }
    }
} };

export default Sidebar;
