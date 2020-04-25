
import '../css/dice-buttons.css';

const template = `
<div class="diceContainer">
    <div class="diceRow">
        <div class="diceColumn">
            <button v-on:click="rollDice(4)" class="diceButton">D4</button>
            </div>
        <div class="diceColumn">
            <button v-on:click="rollDice(6)" class="diceButton">D6</button>
            </div>
        <div class="diceColumn">
            <button v-on:click="rollDice(8)" class="diceButton">D8</button>
        </div>
    </div>
    <div class="diceRow">
        <div class="diceColumn">
            <button v-on:click="rollDice(10)" class="diceButton">D10</button>
        </div>
        <div class="diceColumn">
            <button v-on:click="rollDice(12)" class="diceButton">D12</button>
        </div>
        <div class="diceColumn">
            <button v-on:click="rollDice(20)" class="diceButton">D20</button>
        </div>
    </div>
</div>
`;

const DiceButtons = {
    template,
    methods: {
        rollDice: function (diceType) {
            this.$emit('roll-dice', diceType)
        }
    }
};

export default DiceButtons;
