import Page from '../Templates/Page';
import DiceRoller from './DiceRoller';

const template = `
<page>
    <template v-slot:information >
        <h1>Dice Roller!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam. Nibh venenatis cras sed felis eget. Tellus id interdum velit laoreet id. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Mattis enim ut tellus elementum sagittis vitae et. Cras tincidunt lobortis feugiat vivamus. Metus dictum at tempor commodo ullamcorper a lacus. Nibh nisl condimentum id venenatis a condimentum. Dui sapien eget mi proin sed. Vel risus commodo viverra maecenas. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vitae nunc sed velit dignissim sodales. Ut tortor pretium viverra suspendisse potenti nullam. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Augue mauris augue neque gravida.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam. Nibh venenatis cras sed felis eget. Tellus id interdum velit laoreet id. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Mattis enim ut tellus elementum sagittis vitae et. Cras tincidunt lobortis feugiat vivamus. Metus dictum at tempor commodo ullamcorper a lacus. Nibh nisl condimentum id venenatis a condimentum. Dui sapien eget mi proin sed. Vel risus commodo viverra maecenas. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vitae nunc sed velit dignissim sodales. Ut tortor pretium viverra suspendisse potenti nullam. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Augue mauris augue neque gravida.</p>
    </template>
    <template v-slot:widget >
        <h2>Interactive Roller</h2>
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