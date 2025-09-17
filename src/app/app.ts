import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./features/home-component/home-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  protected readonly title = signal('first_app');
}
