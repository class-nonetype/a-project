import { Component, Input } from '@angular/core';
import { SidebarDashboardOptionComponent } from './dashboard-option-component/dashboard-option.component';
import { SidebarInboxOptionComponent } from './inbox-option-component/inbox-option.component';
import { SidebarProfileOptionComponent } from './profile-option-component/profile-option.component';
import { SidebarSignOutOptionComponent } from './sign-out-option-component/sign-out-option.component';
import { SidebarSettingsOptionComponent } from './settings-option-component/settings-option.component';


@Component({
  selector: 'app-sidebar-menu-options',
  standalone: true,
  imports: [
    SidebarDashboardOptionComponent,
    SidebarInboxOptionComponent,
    SidebarProfileOptionComponent,
    SidebarSettingsOptionComponent,
    SidebarSignOutOptionComponent
  ],
  templateUrl: './sidebar-menu-options.component.html',
})
export class SidebarMenuOptionsComponent {
  @Input() collapsed = false;
}
