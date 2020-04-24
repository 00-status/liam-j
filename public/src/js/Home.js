import Page from './Pages/Page';

const template = `
<page>
    <template v-slot:information >
        <h1>Homepage</h1>
        <div class="homeInformation">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Magna ac placerat vestibulum lectus mauris ultrices. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Mauris vitae ultricies leo integer. Arcu cursus vitae congue mauris. Porttitor leo a diam sollicitudin. Ac tortor dignissim convallis aenean. Lacus suspendisse faucibus interdum posuere lorem ipsum. Scelerisque eu ultrices vitae auctor. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Egestas maecenas pharetra convallis posuere morbi leo. Cursus in hac habitasse platea dictumst. Hendrerit dolor magna eget est lorem.</p>
            <p>Viverra nibh cras pulvinar mattis. Nibh praesent tristique magna sit amet purus gravida quis. Etiam non quam lacus suspendisse. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Odio eu feugiat pretium nibh ipsum consequat. Sed ullamcorper morbi tincidunt ornare massa. Pharetra sit amet aliquam id. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Magna etiam tempor orci eu lobortis elementum nibh tellus. Ultricies lacus sed turpis tincidunt id.</p>
        </div>
    </template>
    <template v-slot:widget >
        <h2>Social Links</h2>
        <div>
            <button>Github</button>
            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>Email</button>
        </div>
    </template>
</page>
`;

const Home = {
    template,
    components: { page: Page }
};

export default Home;