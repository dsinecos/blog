import blogHeader from './components/blog/blogHeader.vue';
import blogList from './components/blog/blogList.vue';

import aboutHeader from './components/about/aboutHeader.vue';
import aboutContent from './components/about/aboutContent.vue';

import portfolioHeader from './components/portfolio/portfolioHeader.vue';
import portfolioList from './components/portfolio/portfolioList.vue';

export const routes = [
    { path: '/', components: {
        'page-header': blogHeader,
        'page-content': blogList
    } },
    // { path: '/blog', component: blogList },
    { path: '/about', components: {
        'page-header': aboutHeader,
        'page-content': aboutContent
    } },
    { path: '/portfolio', components: {
        'page-header': portfolioHeader,
        'page-content': portfolioList
    } }
];