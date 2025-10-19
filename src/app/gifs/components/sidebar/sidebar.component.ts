import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidebarHeaderComponent } from './sidebar-options/header-component/header.component';
import { SidebarMenuOptionsComponent } from './sidebar-options/sidebar-menu-options.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarHeaderComponent,
    SidebarMenuOptionsComponent
  ],
  styleUrl: './sidebar.component.css',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  // Controla el modo compacto para ofrecer un aside tipo "mini" cuando se colapsa.
  collapsed = false;

  onToggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }
}
