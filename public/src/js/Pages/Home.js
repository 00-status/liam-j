
import Sidebar from '../Templates/Sidebar';

import './home.css';

const template = `
    <div class="home">
        <sidebar></sidebar>
        <div class="homePage">
            <div class="mainContent" >
                <h1>Homepage</h1>
                <p>Hello! I'm Liam - this is my website - please do have a look around while you're here. I'm a full-stack developer with experience in a fair amount of web development languages and frameworks. I know my way around React JS the best, but am practiced in vanilla JavaScript, CSS, and Vue JS as well. For back-end languages I mainly work with vanilla PHP to get the job done. This particular website's UI was built using Vue JS and Vue Router - along with vanilla css for styling. Server routing is being taken care of with the PHP's Slim Framework and a tiny templating library. If you're interesting in perusing the repository you can find it on <a href='https://github.com/00-status/liam-j' target='_blank' rel='noopener noreferrer'>GitHub</a>. </p>
                <p>I can be a pretty nerdy. Video games, Star Wars, superhero movies – if it's sci-fi or fantasy I'm probably into it. I'm particularly fond of Dungeons and Dragons and other tabletop games. I think they can be an excellent way to connect with others, and they've also been a great source of creative inspiration in my personal projects as well – as you may guess from some of the other pages on this site.</p>
                <p>If you'd like to get in contact with me, <a href='mailto:liam.jj@hotmail.com' target='_blank' rel='noopener noreferrer' >liam.jj@hotmail.com</a> is the best place to do it, but you're welcome to check out any of my social media platforms as well. </p>
            </div>
            <div class="horizontalDivider" ></div>
            <div class="buttonRow">
                <button v-on:click="linkTo('github')" class="socialButton"><i class="fab fa-github"></i> Github</button>
                <button v-on:click="linkTo('twitter')" class="socialButton"><i class="fab fa-twitter"></i> Twitter</button>
                <button v-on:click="linkTo('linked-in')" class="socialButton"><i class="fab fa-linkedin"></i> LinkedIn</button>
            </div>
        </div>
    </div>
`;

const Home = {
    template,
    components: { Sidebar },
    methods: {
        linkTo: function (place) {
            switch (place) {
                case 'github':
                    window.open('https://github.com/00-status', '_blank', 'noopener, noreferrer');
                    break;
                case 'twitter':
                    window.open('https://twitter.com/00Status1', '_blank', 'noopener, noreferrer');
                    break;
                case 'linked-in':
                    window.open('https://www.linkedin.com/in/liam-johnson-36791915a/', '_blank', 'noopener, noreferrer');
                    break;
                default:
                    return;
            }
        }
    }
 };

export default Home;
