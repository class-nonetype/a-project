import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

interface Tickets {
  from: string;
  subject: string;
  time: string;
  unread: boolean;
}

@Component({
  selector: 'app-ticket-inbox-page',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './ticket-inbox-page.component.html',
  styleUrl: './ticket-inbox-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TicketInboxPageComponent {
  readonly messages: Tickets[] = [
    { from: 'Marketing', subject: 'Campaña Q4 aprobada', time: 'Hace 5 min', unread: true },
    { from: 'Finanzas', subject: 'Reporte de facturación', time: 'Hace 32 min', unread: true },
    { from: 'Ana Gómez', subject: 'Revisión del dashboard', time: 'Hace 1 h', unread: false },
    { from: 'Soporte', subject: 'Actualización de SLA', time: 'Hace 2 h', unread: false },
  ];
}
