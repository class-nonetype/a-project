import { Component } from '@angular/core';

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
})
export class SidebarComponent {
  collapsed = false;

  onToggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
