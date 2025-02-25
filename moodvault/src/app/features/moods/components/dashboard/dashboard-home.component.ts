import { Component } from '@angular/core';
import { WrapperLayoutComponent } from '../../../../shared/layouts/wrapper-layout/wrapper-layout.component';

@Component({
  selector: 'app-moods-list-view',
  standalone: true,
  imports: [WrapperLayoutComponent],
  templateUrl: './dashboard-home.component.html',
})
export class MoodsDashboard {}
