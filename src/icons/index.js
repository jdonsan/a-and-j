import Vue from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faMusic,
  faClock,
  faLocationDot,
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMusic)
library.add(faClock)
library.add(faLocationDot)
library.add(faCircleInfo)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
