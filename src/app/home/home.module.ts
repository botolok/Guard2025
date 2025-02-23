import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module'; // Импорт маршрутов для HomePage
import { HomePage } from './home.page'; // Импорт компонента HomePage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, // Добавление маршрутизации для HomePage
  ],
  declarations: [HomePage], // Объявление компонента HomePage
})
export class HomePageModule {}
