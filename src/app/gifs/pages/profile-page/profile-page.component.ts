import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface ProfileStat {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfilePageComponent {
  readonly stats: ProfileStat[] = [
    { label: 'Proyectos activos', value: '8', icon: 'work' },
    { label: 'Tareas completadas', value: '124', icon: 'done_all' },
    { label: 'Promedio de respuesta', value: '1h 32m', icon: 'timer' },
  ];
}
