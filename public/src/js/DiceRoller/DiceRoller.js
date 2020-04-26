
import DiceButtons from './components/DiceButtons.js';
import DiceText from './components/DiceText.js';
import AdvancedDice from './components/AdvancedDice.js';
import rollDice from './roller.js';

import './css/dice-roller.css';

const template = `
<div class="diceRoller">
    <dice-text v-bind:dice-history="diceHistory"></dice-text>
    <dice-buttons v-on:roll-dice="handleDiceRoll"></dice-buttons>
    <advanced-dice v-on:advanced-dice-roll="handleDiceRoll"></advanced-dice>
</div>
`;

const DiceRoller = {
    data: function () {
        return { diceHistory: '' }
    },
    template,
    components: {
        'dice-buttons': DiceButtons,
        'dice-text': DiceText,
        'advanced-dice': AdvancedDice
    },
    methods: {
        handleDiceRoll: function (diceType, numberOfDice, add) {
            // some super basic validation
            diceType = diceType ? diceType : 6;
            numberOfDice = numberOfDice ? numberOfDice : 1;
            add = add ? add : 0;

            this.diceHistory = rollDice(diceType, numberOfDice, add) + this.diceHistory;
        },
    }
};

export default DiceRoller;
