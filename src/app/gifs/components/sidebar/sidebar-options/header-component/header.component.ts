import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { SidebarToggleOptionComponent } from '../toggle-option-component/toggle-option.component';

@Component({
  selector: 'app-sidebar-header',
  standalone: true,
  imports: [NgClass, NgIf, SidebarToggleOptionComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeaderComponent {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();
}
