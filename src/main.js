// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'typeface-montserrat';

// external-link-alt
config.autoAddCss = false;
library.add(faGithub);
library.add(faExternalLinkAlt);

export default function (Vue, { router, head, isClient }) {
  Vue.component('font-awesome', FontAwesomeIcon);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
