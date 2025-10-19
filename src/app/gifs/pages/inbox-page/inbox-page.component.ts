import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface InboxMessage {
  from: string;
  subject: string;
  time: string;
  unread: boolean;
}

@Component({
  selector: 'app-inbox-page',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './inbox-page.component.html',
  styleUrl: './inbox-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InboxPageComponent {
  readonly messages: InboxMessage[] = [
    { from: 'Marketing', subject: 'Campaña Q4 aprobada', time: 'Hace 5 min', unread: true },
    { from: 'Finanzas', subject: 'Reporte de facturación', time: 'Hace 32 min', unread: true },
    { from: 'Ana Gómez', subject: 'Revisión del dashboard', time: 'Hace 1 h', unread: false },
    { from: 'Soporte', subject: 'Actualización de SLA', time: 'Hace 2 h', unread: false },
  ];
}
