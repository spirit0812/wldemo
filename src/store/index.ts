import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProjectList from '../views/projectManager/projectList.vue';
import ProjectImport from '../views/projectManager/projectImport.vue';
import IndexPage from '../views/indexPage.vue';
import ProjectView from '../views/projectManager/projectView.vue';
import SpecialManage from '../views/projectManager/specialManage.vue';
import roleManage from '../views/systemManager/roleManage.vue';
import organizationManage from '../views/systemManager/organizationManage.vue';
import personManage from '../views/systemManager/personManage.vue';
import CommonReport from '../views/bigData/commonReport.vue';
import SelfEdit from '../views/evaluateManager/selfEdit.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
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
      {
        path: '/projectView',
        name: 'projectView',
        component: ProjectView,
      },
      {
        path: '/specialManage',
        name: 'specialManage',
        component: SpecialManage
      },
      {
        path: '/roleManage',
        name: 'roleManage',
        component: roleManage
      },
      {
        path: '/organizationManage',
        name: 'organizationManage',
        component: organizationManage
      },
      {
        path: '/personManage',
        name: 'personManage',
        component: personManage
      }
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
  {
    path: '/',
    name: 'login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
