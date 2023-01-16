import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueIframe from 'vue-iframes'
import iVueFrame from "i-vue-frame";
import browserDetect from "vue-browser-detect-plugin";
import VueSimpleAlert from "vue-simple-alert";

// import io from "socket.io-client";
// import VueSocketIO from "vue-socket.io";

// Vue.use(
//   new VueSocketIO({
//     connection: io('http://localhost:8000'), // options object is Optional
//   })
// );

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
}).$mount('#app')