
import '../css/advanced-dice.css';

const template = `
<div class="diceRow advancedRoller">
    <input
        class="advancedRollerEntry"
        maxlength="4"
        type="number"
        placeholder="1"
        v-model="numberOfDice"
    />
    <p class="advancedRollerSeparator">D</p>
    <input
        class="advancedRollerEntry"
        maxlength="4"
        type="number"
        placeholder="Dice"
        v-model="diceType"
    />
    <p class="advancedRollerSeparator">+</p>
    <input
        class="advancedRollerEntry"
        maxlength="4"
        type="number"
        placeholder="0"
        v-model="add"
    />
    <button v-on:click="advancedDiceRoll" class="advancedDiceButton">Roll</button>
</div>
`;

const AdvancedDice = {
    template,
    data: function () {
        return {
            diceType: null,
            numberOfDice: null,
            add: null
        };
    },
    methods: {
        advancedDiceRoll: function () {
            this.$emit('advanced-dice-roll', this.diceType, this.numberOfDice, this.add);
        }
    }
};

export default AdvancedDice;
