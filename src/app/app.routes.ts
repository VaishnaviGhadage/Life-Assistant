import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MainLayout } from './layout/main-layout/main-layout';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Tasks } from './pages/tasks/tasks';
import { Vault } from './pages/vault/vault';
import { Dashboard } from './pages/dashboard/dashboard';
import { ActionPlan } from './pages/action-plan/action-plan';

export const routes: Routes = [
    {
        path:'',component:MainLayout,
        children:[
            {
               path:'',component:Home,
            },
            {
               path:'login',component:Login,
            },
            {
               path:'register',component:Register,
            },
            {
               path:'tasks',component:Tasks,
            },
            {
               path:'vault',component:Vault,
            },
            {
               path:'dashboard',component:Dashboard,
            },
            {
               path:'actionPlan',component:ActionPlan,
            }
        ]
    }
];
