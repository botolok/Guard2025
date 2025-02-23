import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Импортируйте IonicModule
import { RouterModule } from '@angular/router'; // Для маршрутизации

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Вместо отдельных компонентов добавьте IonicModule
    CommonModule,
    FormsModule,
    RouterModule, // Для работы с routerLink
  ],
})
export class WelcomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
