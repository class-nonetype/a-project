import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar-ticket-inbox-option',
  standalone: true,
  imports: [NgIf, RouterLink, MatBadgeModule, MatIconModule, MatListModule],
  templateUrl: './tickets-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarTicketsOptionComponent {
  @Input() collapsed = false;
}
