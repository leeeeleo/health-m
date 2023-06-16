import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import Login from '@/views/Login/LoginView.vue'
import Home from '@/views/Home/HomeView.vue'
import Upload from '@/views/Upload/UpLoadView.vue'
import Upsuccess from '@/views/Upload/UpSuccessView.vue'
import Loading from '@/views/Upload/LoadingView.vue'
import Contentreport from '@/views/Content/ContentreportView.vue'
import identify from '@/views/Content/IdentifyView.vue'
import DetailedReports from '@/views/Reports/DetailedReports.vue'
import Logined from '@/views/Login/LoginedView.vue'
import Loginedleaded from '@/views/Login/LoginedLeadedView.vue'
import Examreport from '@/views/Reports/ExamReport.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/Login',
    name:'Login',
    component:Login
  },
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/Upload',
    name:'Upload',
    component:Upload
  },
  {
    path:'/Upsuccess',
    name:'Upsuccess',
    component:Upsuccess
  },
  {
    path:'/Loading',
    name:'Loading',
    component:Loading
  },
  {
    path:'/Contentreport',
    name:'Contentreport',
    component:Contentreport
  },
  {
    path:'/identify',
    name:'identify',
    component:identify
  },
  {
    path:'/DetailedReports',
    name:'DetailedReports',
    component:DetailedReports
  },
  {
    path:'/Logined',
    name:'Logined',
    component:Logined
  },
  {
    path:'/Loginedleaded',
    name:'Loginedleaded',
    component:Loginedleaded
  },
  {
    path:'/Examreport',
    name:'Examreport',
    component:Examreport
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
