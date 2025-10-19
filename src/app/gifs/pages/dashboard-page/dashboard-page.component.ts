import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-page',
  imports: [NgFor, MatButtonModule, MatIconModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent {
  readonly highlights = [
    { icon: 'show_chart', label: 'Ventas', value: '$24 500', trend: '+12%' },
    { icon: 'group', label: 'Clientes', value: '1 280', trend: '+5%' },
    { icon: 'task_alt', label: 'Tareas', value: '32', trend: 'En progreso' },
  ];
}
