import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Trend {
  name: string;
  delta: string;
  positive: boolean;
}

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {
  readonly trends: Trend[] = [
    { name: 'Campaña social media', delta: '+18%', positive: true },
    { name: 'Conversiones landing ecommerce', delta: '+9%', positive: true },
    { name: 'Tiempo de respuesta soporte', delta: '-12%', positive: true },
    { name: 'Churn mensual', delta: '+3%', positive: false },
  ];
}
