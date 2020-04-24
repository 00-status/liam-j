
import Sidebar from '../components/Sidebar';

const template = `
    <div class="page">
        <sidebar></sidebar>
        <div class="homePage">
            <div class="mainContent" >
                <h1>Homepage</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Rhoncus urna neque viverra justo. Aenean et tortor at risus viverra. Sagittis vitae et leo duis ut diam quam nulla porttitor. Nulla aliquet porttitor lacus luctus accumsan. Gravida neque convallis a cras. Purus gravida quis blandit turpis cursus in hac. Sed felis eget velit aliquet sagittis id consectetur purus ut. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Sed faucibus turpis in eu mi bibendum. Massa tempor nec feugiat nisl pretium fusce id velit ut. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.</p>
                <p>Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Elit duis tristique sollicitudin nibh sit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Augue lacus viverra vitae congue eu consequat ac. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Odio ut enim blandit volutpat maecenas volutpat blandit. Turpis nunc eget lorem dolor sed viverra ipsum. Proin nibh nisl condimentum id venenatis. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Massa ultricies mi quis hendrerit. Tristique senectus et netus et malesuada. Sed enim ut sem viverra. Cras adipiscing enim eu turpis. Sit amet consectetur adipiscing elit ut aliquam purus. Purus ut faucibus pulvinar elementum integer enim neque. Sem integer vitae justo eget. Urna cursus eget nunc scelerisque viverra mauris in. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.</p>
                <p>Neque gravida in fermentum et sollicitudin ac. Eleifend donec pretium vulputate sapien nec. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Pellentesque id nibh tortor id aliquet lectus proin. Elit pellentesque habitant morbi tristique senectus et. Donec et odio pellentesque diam volutpat commodo sed. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. In cursus turpis massa tincidunt dui ut. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Lectus quam id leo in vitae turpis massa sed. Tellus molestie nunc non blandit massa enim nec dui nunc. Duis tristique sollicitudin nibh sit amet. Et egestas quis ipsum suspendisse ultrices gravida. Posuere morbi leo urna molestie. Proin nibh nisl condimentum id venenatis a condimentum. Sagittis purus sit amet volutpat consequat mauris. Cras ornare arcu dui vivamus arcu felis. At volutpat diam ut venenatis tellus in metus vulputate.</p>
            </div>
            <div class="horizontalDivider" ></div>
            <div class="row">
                <div class="column" >
                    <button class="socialButton">Github</button>
                    <button class="socialButton">LinkedIn</button>
                </div>
                <div class="column" >
                    <button class="socialButton">Twitter</button>
                    <button class="socialButton">Email</button>
                </div>
            </div>
        </div>
    </div>
`;

const Landing = { template, components: { Sidebar } };

export default Landing;
