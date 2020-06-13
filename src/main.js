// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {config, library} from '@fortawesome/fontawesome-svg-core'
import {faExternalLinkAlt, faRss, faCheck, faTimes, faPlay} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faWikipediaW,
  faLinkedin,
  faTwitter,
  faRedditSquare,
  faYCombinator,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'typeface-montserrat';
import 'materialize-css/dist/css/materialize.css'

if (process.isClient) {
  require('materialize-css/dist/js/materialize.min.js');
}

[
  faExternalLinkAlt,
  faRss,
  faCheck,
  faTimes,
  faPlay,

  faGithub,
  faLinkedin,
  faWikipediaW,
  faTwitter,
  faRedditSquare,
  faYCombinator,
  faCodepen
].forEach((e) => library.add(e))
// external-link-alt
config.autoAddCss = false;

export default function (Vue, {router, head, isClient}) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
  });

  Vue.component('font-awesome', FontAwesomeIcon);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
