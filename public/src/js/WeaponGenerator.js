import Page from "./components/Page";

const template = `
<page>
    <template v-slot:information ><h1>Weapon Generator</h1></template>
    <template v-slot:widget ><h2>Interactive Generator</h2></template>
</page>
`;

const WeaponGenerator = {
    template,
    components: { page: Page }
};

export default WeaponGenerator;
