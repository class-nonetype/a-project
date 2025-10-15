import {  Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-profile-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './profile-option.component.html',
})
export class SidebarProfileOptionComponent {
  @Input() collapsed = false;
}
