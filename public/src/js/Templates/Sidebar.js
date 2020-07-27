import anime from 'animejs';
import './sidebar.css';

const template = `
<div class="sidebar">
    <div
        class="sidebar-item"
        v-on:click="navigate('/')"
        ref="sidebar-item-home"
        @mouseover="onItemHover('sidebar-item-home')"
        @mouseleave="onItemLeave('sidebar-item-home')"
    >
        <span class="sidebar-icon" ><i class="fas fa-home"></i></span>
        <span class="sidebar-text" >home</span>
    </div>
    <div
        class="sidebar-item"
        v-on:click="navigate('/dice_roller')"
        ref="sidebar-item-roller"
        @mouseover="onItemHover('sidebar-item-roller')"
        @mouseleave="onItemLeave('sidebar-item-roller')"
    >
        <span class="sidebar-icon" ><i class="fas fa-dice-six"></i></span>
        <span class="sidebar-text" >Dice Roller</span>
    </div>
    <div
        class="sidebar-item"
        v-on:click="navigate('/weapon_generator')"
        ref="sidebar-item-generator"
        @mouseover="onItemHover('sidebar-item-generator')"
        @mouseleave="onItemLeave('sidebar-item-generator')"
    >
        <span class="sidebar-icon" ><i class="fas fa-cog" ></i></span>
        <span class="sidebar-text" >Weapon Generator</span>
    </div>
</div>
`;

const Sidebar = {
    template,
    methods: {
        navigate: function (route) {
            if (route !== this.$route.path) {
                this.$router.push(route);
            }
        },
        onItemHover: function (elementName) {
            anime({
                targets: this.$refs[elementName],
                easing: 'linear',
                background: 'rgb(71, 74, 114)',
                duration: 300
            });
        },
        onItemLeave: function (elementName) {
            anime({
                targets: this.$refs[elementName],
                easing: 'linear',
                background: 'rgb(23, 20, 19)',
                duration: 300
            });
        },
    }
};

export default Sidebar;
