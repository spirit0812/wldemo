import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProjectList from '../views/projectManager/projectList.vue';
import ProjectImport from '../views/projectManager/projectImport.vue';
import IndexPage from '../views/indexPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/indexPage',
        name: 'indexPage',
        component: IndexPage,
      },
      {
        path: '/projectList',
        name: 'projectList',
        component: ProjectList,
      },
      {
        path: '/projectImport',
        name: 'projectImport',
        component: ProjectImport,
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
