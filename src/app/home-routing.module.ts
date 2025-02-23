import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page'; // Импортируем HomePage

const routes: Routes = [
  {
    path: '',
    component: HomePage, // Указываем компонент для маршрута
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Настроим маршруты
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
