import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
})
export class AppLayoutComponent {}
