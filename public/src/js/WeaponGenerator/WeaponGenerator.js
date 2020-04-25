import WeaponBox from './components/WeaponBox.js';
import VueButton from './components/VueButton.js';
import fetchWeapon from './api/fetchWeapon.js';

import './weapon-generator.css';

let weapon = {
    name: '',
    rarity: '',
    damageType: '',
    damageDie: 6,
    damageDieAmount: 2,
    effects: []
};

const generateWeapon = () => {
    fetchWeapon((response) => {
        weapon.name = response.name;
        weapon.rarity = response.rarity;
        weapon.damageType = response.damage_type;
        weapon.damageDie = response.damage_die;
        weapon.damageDieAmount = response.damage_die_amount;
        weapon.effects = response.effects;
    });
};

const template = `
<div>
    <vue-button :listener="generateWeapon" ></vue-button>
    <weapon-box :title="weapon.name" :effects="weapon.effects">
        <template v-slot:sub-title>{{ weapon.rarity }}</template>
        <template v-slot:content>
            Deals {{ weapon.damageDieAmount + 'd' + weapon.damageDie + ' ' + weapon.damageType }} Damage
        </template>
    </weapon-box>
</div>
`;

const WeaponGenerator = {
    template,
    created: generateWeapon(),
    data: () => {return {weapon}},
    components: {
        WeaponBox,
        VueButton
    },
    methods: {
        generateWeapon: generateWeapon
    }
};

export default WeaponGenerator;
