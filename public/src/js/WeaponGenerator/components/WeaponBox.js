
const weaponBox = `
<div class="weaponBox">
    <h1>{{ name }}</h1>
    <div class="divider"></div>
    <h3>{{ rarity }}</h3>
    <div>
        Deals {{ damageDieAmount + 'd' + damageDie + ' ' + damageType }} Damage
    </div>
    <div class="divider"></div>
    <ul class="effectList">
        <li v-for="effect in effects">
            {{ effect }}
        </li>
    </ul>
</div>`;
const WeaponBox = {
    props: {
        name: String,
        rarity: String,
        damageDieAmount: Number,
        damageDie: Number,
        damageType: String,
        effects: Array
    },
    template: weaponBox
};

export default WeaponBox;
