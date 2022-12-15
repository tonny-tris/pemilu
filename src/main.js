import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueIframe from 'vue-iframes'
import iVueFrame from "i-vue-frame";
import browserDetect from "vue-browser-detect-plugin";
import VueSimpleAlert from "vue-simple-alert";
// import VueSession from 'vue-session'
// Vue.use(require('vue-cookies'))

// Vue.use(VueSession)

Vue.prototype.$globalData = Vue.observable({
  dataLogin: [],
  nip: '',
  fungsi: '',
  idapp: '',
});

Vue.use(iVueFrame);
Vue.use(VueSimpleAlert)
Vue.use(VueIframe)
Vue.use(require('vue-cookies'))
Vue.use(browserDetect);

Vue.use(Toast);

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
    },
});

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App),
    store
}).$mount('#app')