import Page from "../Templates/Page";
import WeaponGenerator from "./WeaponGenerator";

const template = `
<page>
    <template v-slot:information >
        <h1>Weapon Generator</h1>
        <p>This guy is a weapon generator for Dungeons and Dragons 5th Edition. It works by randomly generating a weapon name from a list of words, and then deriving points from that name. These points are then used to make up the various special effects attached to that weapon. Originally I had planned to include a custom backstory with each item, but I quickly found doing so would inflate the scope of the project just a little too much. Regardless, I feel like it can still be a good source of inspiration for anybody who may be running a D&D game of their own.</p>
        <p>The UI was built using vanilla css along with Vue JS, and the api used to generate a weapon was done using Slim PHP. If you're curious as to how it was made, feel free to take a look at the <a href='https://github.com/00-status/weapon-generator' target='_blank' rel='noopener noreferrer'>GitHub repository</a>.</p>
    </template>
    <template v-slot:widget >
        <weapon-generator></weapon-generator>
    </template>
</page>
`;

const WeaponGeneratorPage = {
    template,
    components: {
        page: Page,
        'weapon-generator': WeaponGenerator
    }
};

export default WeaponGeneratorPage;
