import Vue from "vue";
import Router from "vue-router";
import Main from "../components/Main";
import Profile from "../components/Profile";
import Html2 from "../components/Html2";
import ExampleComponent from "../components/ExampleComponent";

Vue.use(Router)

export default new Router({
        routes: [
            {
                name: 'main',
                component: Main,
                path: '/'

            },
            {
                name: 'profile',
                component: Profile,
                path: '/profile'

            },
            {
                name: 'ExampleComponent',
                component: ExampleComponent,
                path: '/example'

            },
            {
                name: 'Html2',
                component: Html2,
                path: '/html_2'

            },
        ],
        mode: 'history'
    }
)
