import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePage } from './welcome/welcome.page';
import { HomePageModule } from './home/home.module'; // Импортируем HomePageModule

@NgModule({
  declarations: [AppComponent, WelcomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomePageModule, // Добавляем HomePageModule в imports
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
