import Vue from 'vue';
import Router from 'vue-router';
// import Error from "@/pages/Error/Error";
import RekapPemilu from "@/pages/Login/RekapPemilu"

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/rekappemilu',
            name: 'RekapPemilu',
            component: RekapPemilu
        }
    ],
});