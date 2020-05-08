import Page from '../Templates/Page';
import DiceRoller from './DiceRoller';

const template = `
<page>
    <template v-slot:information >
        <h1>Dice Roller!</h1>
        <p>This was one of the first little doo-dads that I ever wrote. It's an online dice roller for tabletop role-playing games such as Dungeons and Dragons or Pathfinder. I originally wrote the UI in vanilla JavaScript, but after some refactoring, that is now being taken care of by Vue JS. You can check out the repository <a href='https://github.com/00-status/Dice-Roller' target='_blank' rel='noopener noreferrer'>here</a></p>
    </template>
    <template v-slot:widget >
        <dice-roller></dice-roller>
    </template>
</page>
`;

const DiceRollerPage = {
    template,
    components: {
        page: Page,
        'dice-roller': DiceRoller
    }
};

export default DiceRollerPage;