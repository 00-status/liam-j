
const template = `
<div class="page" >
    <div class="sidebar" >
        <div class="sidebar-item" v-on:click="navigate('/')">home</div>
        <div class="sidebar-item" v-on:click="navigate('/dice_roller')" to="/dice_roller">Dice Roller</div>
        <div class="sidebar-item" v-on:click="navigate('/weapon_generator')">Weapon Generator</div>
    </div>
    <div class="contents">
        <div class="information">
            <slot name="information"></slot>
        </div>
        <div class="widget">
            <slot name="widget"></slot>
        </div>
    </div>
</div>
`;

const Page = { template, methods: {
    navigate: function (route) {
        if (route !== this.$route.path) {
            this.$router.push(route);
        }
    }
} };

export default Page;
