import {  Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-profile-option',
  imports: [],
  templateUrl: './profile-option.component.html',
})
export class SidebarProfileOptionComponent {
  @Input() collapsed = false;
}
