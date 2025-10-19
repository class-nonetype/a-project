import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface SearchResult {
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {
  readonly results: SearchResult[] = [
    {
      title: 'Panel de analytics',
      description: 'Monitoriza conversiones, embudos y KPIs principales en tiempo real.',
      category: 'Dashboards',
    },
    {
      title: 'Listado de usuarios activos',
      description: 'Usuarios con sesión activa durante los últimos 7 días.',
      category: 'Usuarios',
    },
    {
      title: 'Historico de facturación',
      description: 'Detalle de ingresos por mes, incluyendo proyecciones del trimestre.',
      category: 'Finanzas',
    },
  ];
}
