

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
import plainReport from '../views/bigData/plainReport.vue';
import dataCollectList from '../views/bigData/dataCollectList.vue';
import dataCollectEdit from '../views/bigData/dataCollectEdit.vue';

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
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/projectList',
        name: 'projectList',
        component: ProjectList,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/projectImport',
        name: 'projectImport',
        component: ProjectImport,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/projectView',
        name: 'projectView',
        component: ProjectView,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/specialManage',
        name: 'specialManage',
        component: SpecialManage,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/evaluateList',
        name: 'evaluateList',
        component: EvaluateList,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/evaluateEdit',
        name: 'evaluateEdit',
        component: EvaluateEdit,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/selfList',
        name: 'selfList',
        component: SelfList,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/analysis',
        name: 'analysis',
        component: Analysis,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/roleManage',
        name: 'roleManage',
        component: roleManage,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/organizationManage',
        name: 'organizationManage',
        component: organizationManage,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/personManage',
        name: 'personManage',
        component: personManage,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/commonReport',
        name: 'commonReport',
        component: CommonReport,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/selfEdit',
        name: 'selfEdit',
        component: SelfEdit,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/dataSetting',
        name: 'dataSetting',
        component: dataSetting,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/plainReport',
        name: 'plainReport',
        component: plainReport,
        props: (route: any) => ({ pageName: route.query.pageName })

      },
      {
        path: '/dataCollectList',
        name: 'dataCollectList',
        component: dataCollectList,
        props: (route: any) => ({ pageName: route.query.pageName })
      },
      {
        path: '/dataCollectEdit',
        name: 'dataCollectEdit',
        component: dataCollectEdit,
        props: (route: any) => ({ pageName: route.query.pageName })
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

