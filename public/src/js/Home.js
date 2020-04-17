import Page from './components/Page';

const template = `
<page>
    <template v-slot:information >
        <h1>Homepage</h1>
    </template>
    <template v-slot:widget >
        <h2>Social Links</h2>
    </template>
</page>
`;

const Home = {
    template,
    components: { page: Page }
};

export default Home;