import Vue from 'vue'
import { createPopup } from '@typeform/embed'
import '@typeform/embed/build/css/popup.css'

Vue.prototype.$createPopup = createPopup
