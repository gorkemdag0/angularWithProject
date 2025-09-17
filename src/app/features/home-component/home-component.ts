import { Component } from '@angular/core';
import { Sidebar } from '../../shared/components/layouts/sidebar/sidebar';
import { Topbar } from '../../shared/components/layouts/topbar/topbar';

@Component({
  selector: 'app-home-component',
  imports: [Sidebar,Topbar],
  standalone: true,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
