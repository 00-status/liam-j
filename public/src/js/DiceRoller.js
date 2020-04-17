import Page from './components/Page';

const template = `
<page>
    <template v-slot:information >
        <h1>Dice Roller!</h1>
    </template>
    <template v-slot:widget >
        <h2>Interactive Roller</h2>
    </template>
</page>
`;

const DiceRoller = {
    template,
    components: { page: Page }
};

export default DiceRoller;