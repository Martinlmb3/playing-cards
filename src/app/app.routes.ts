import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list';
import { Monster } from './pages/monster/monster';
import { NotFound } from './pages/not-found/not-found';
export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MonsterList
  },
  {
    path: 'monster',
    children:[ {
      path:'monster/:id',
      component:Monster
    },
    {
      path:'',
      component:Monster
    }]
  },
  {
    path:'**',
    component: NotFound
  }];
