
const weaponBox = `
<div class="weaponBox">
    <h1>{{ name }}</h1>
    <div class="divider"></div>
    <div class="weaponInfo">
        <span class="weaponRarity">{{ rarity }},</span>
        <span>
            Deals {{ damageDieAmount + 'd' + damageDie + ' ' + damageType }} damage
        </span>
    </div>
    <div class="divider"></div>
    <div>
        <p class="weaponEffect" v-for="effect in effects">
            {{ effect }}
        </p>
    </div>
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
