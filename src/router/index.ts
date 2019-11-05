import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import ProjectList from '../views/projectManager/projectList.vue';
import ProjectImport from '../views/projectManager/projectImport.vue';
import IndexPage from '../views/indexPage.vue';
import ProjectView from '../views/projectManager/projectView.vue';
import SpecialManage from '../views/projectManager/specialManage.vue';
import EvaluateList from '../views/evaluateManager/evaluateList.vue';
import EvaluateEdit from '../views/evaluateManager/evaluateEdit.vue';
import SelfList from '../views/evaluateManager/selfList.vue';
import Analysis from '../views/bigData/analysis.vue';
import roleManage from '../views/systemManager/roleManage.vue';
import organizationManage from '../views/systemManager/organizationManage.vue';
import personManage from '../views/systemManager/personManage.vue';
import CommonReport from '../views/bigData/commonReport.vue';
import SelfEdit from '../views/evaluateManager/selfEdit.vue';
import dataSetting from '../views/bigData/dataSetting.vue';
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
        path: '/evaluateList',
        name: 'evaluateList',
        component: EvaluateList
      },
      {
        path: '/evaluateEdit',
        name: 'evaluateEdit',
        component: EvaluateEdit
      },
      {
        path: '/selfList',
        name: 'selfList',
        component: SelfList
      },
      {
        path: '/analysis',
        name: 'analysis',
        component: Analysis
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
      },
      {
        path: '/commonReport',
        name: 'commonReport',
        component: CommonReport
      },
      {
        path: '/selfEdit',
        name: 'selfEdit',
        component: SelfEdit
      },
      {
        path: '/dataSetting',
        name: 'dataSetting',
        component: dataSetting
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
