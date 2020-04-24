import Sidebar from './Sidebar';

import './page.css';

const template = `
<div class="page" >
    <sidebar></sidebar>
    <div class="contents">
        <div class="information">
            <slot name="information"></slot>
        </div>
        <div class="widget">
            <slot name="widget"></slot>
        </div>
    </div>
</div>
`;

const Page = { template, components: { Sidebar } };

export default Page;
