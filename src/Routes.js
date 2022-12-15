import Vue from 'vue';
import Router from 'vue-router';

// import Layout from '@/components/Layout/Layout';

// Pages
// import Dashboard from '@/pages/Dashboard/Dashboard';
// import Typography from '@/pages/Typography/Typography'
// import Tables from '@/pages/Tables/Basic'
// import Notifications from '@/pages/Notifications/Notifications'
// import Icons from '@/pages/Icons/Icons'
// import Charts from '@/pages/Charts/Charts'
// import Maps from '@/pages/Maps/Google'
import Error from "@/pages/Error/Error";
import Simpeg from "@/pages/Login/Simpeg";
import Simpegcoba from "@/pages/Login/Simpegcoba";
import Sipijar from "@/pages/Login/Sipijar";
import Siabbagor from "@/pages/Login/Siabbagor";
import Bondowosokab from "@/pages/Login/Bondowosokab";
import Bondowosoku from "@/pages/Login/Bondowosoku";
import Sibuba from "@/pages/Login/Sibuba";
import Said from "@/pages/Login/Said";
import Sinka from "@/pages/Login/Sinka";
import Sinobo from "@/pages/Login/Sinobo";
import LoginDashboard from "@/pages/Login/LoginDashboard";
import Dashboard from "@/pages/Login/Dashboard";
import LoginBaru from "@/pages/Login/LoginBaru";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    // hash: false,
    routes: [
        //  {
        //     path: '/',
        //     redirect: 'logindashboard',
        //     name: 'LoginDashboard',
        //     component: LoginDashboard,
        //     children: [
        {
            path: '/',
            name: 'LoginDashboard',
            component: LoginDashboard
        },
        {
            path: '/simpeg',
            name: 'Simpeg',
            component: Simpeg
        },
        {
            path: '/logindashboard',
            name: 'LoginDashboard',
            component: LoginDashboard
        },
        {
            path: '/loginbaru',
            name: 'LoginBaru',
            component: LoginBaru
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/sipijar',
            name: 'Sipijar',
            component: Sipijar
        },
        {
            path: '/simpegcoba',
            name: 'Simpegcoba',
            component: Simpegcoba
        },
        {
            path: '/siabbagor',
            name: 'Siabbagor',
            component: Siabbagor
        },
        {
            path: '/bondowosokab',
            name: 'Bondowosokab',
            component: Bondowosokab
        },
        {
            path: '/bondowosoku',
            name: 'Bondowosoku',
            component: Bondowosoku
        },
        {
            path: '/sibuba',
            name: 'Sibuba',
            component: Sibuba 
        },
        {
            path: '/said',
            name: 'Said',
            component: Said 
        },
        {
            path: '/sinka',
            name: 'Sinka',
            component: Sinka 
        },
        {
            path: '/sinobo',
            name: 'Sinobo',
            component: Sinobo
        },
        {
            path: '*',
            name: 'Error',
            component: Error
        }
                // {
                //     path: 'dashboard',
                //     name: 'Dashboard',
                //     component: Dashboard,
                // },
                // {
                //     path: 'typography',
                //     name: 'Typography',
                //     component: Typography,
                // },
                // {
                //     path: 'tables',
                //     name: 'Tables',
                //     component: Tables
                // },
                // {
                //     path: 'notifications',
                //     name: 'Notifications',
                //     component: Notifications
                // },
                // {
                //     path: 'icons',
                //     name: 'Icons',
                //     component: Icons
                // },
                // {
                //     path: 'charts',
                //     name: 'Charts',
                //     component: Charts
                // },
                // {
                //     path: 'maps',
                //     name: 'Maps',
                //     component: Maps
                // },
            // ],
        // },
    ],
});