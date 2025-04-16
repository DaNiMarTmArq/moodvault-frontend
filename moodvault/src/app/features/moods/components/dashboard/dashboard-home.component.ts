import { Component } from '@angular/core';
import { WrapperLayoutComponent } from '../../../../shared/layouts/wrapper-layout/wrapper-layout.component';
import { RouterModule } from '@angular/router';
import { AttributeComponent } from '../attribute/attribute.component';

@Component({
  selector: 'app-moods-list-view',
  standalone: true,
  imports: [WrapperLayoutComponent, RouterModule, AttributeComponent],
  templateUrl: './dashboard-home.component.html',
})
export class MoodsDashboard {}
