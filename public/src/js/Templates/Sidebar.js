
import './sidebar.css';

const template = `
<div class="sidebar">
    <div class="sidebar-item" v-on:click="navigate('/')">
        <span class="sidebar-icon" ><i class="fas fa-home"></i></span>
        <span class="sidebar-text" >home</span>
    </div>
    <div class="sidebar-item" v-on:click="navigate('/dice_roller')" to="/dice_roller">
        <span class="sidebar-icon" ><i class="fas fa-dice-six"></i></span>
        <span class="sidebar-text" >Dice Roller</span>
    </div>
    <div class="sidebar-item" v-on:click="navigate('/weapon_generator')">
        <span class="sidebar-icon" ><i class="fas fa-cog" ></i></span>
        <span class="sidebar-text" >Weapon Generator</span>
    </div>
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
