
import '../css/dice-text.css';

const template = `
<textarea class="diceRollerTextArea" rows="14" id="history" readonly>
{{ diceHistory }}
</textarea>
`;

const DiceText = {
    template,
    props: { diceHistory: String }
};

export default DiceText;
