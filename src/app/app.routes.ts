import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list';
import { MonsterComponent } from './pages/monster/monster.component';
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
    path: 'monster/:id',
    component: MonsterComponent
  },
  {
    path: 'monster',
    component: MonsterComponent
  },
  {
    path:'**',
    component: NotFound
  }];
